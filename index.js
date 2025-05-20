import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const antlr4 = require('antlr4');
import fs from 'fs';

import PilaLangLexer from './generated/PilaLangLexer.js';
import PilaLangParser from './generated/PilaLangParser.js';
import CustomPilaLangListener from './CustomPilaLangListener.js';
import CustomPilaLangVisitor from './CustomPilaLangVisitor.js';

// Leer código fuente
const input = fs.readFileSync('input.txt', 'utf8');
console.log("🔍 Código fuente:\n", input);

// Configurar pipeline de análisis
const chars = new antlr4.InputStream(input);
const lexer = new PilaLangLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new PilaLangParser(tokens);

// Manejo de errores
let hasErrors = false;
let errores = [];
lexer.removeErrorListeners();
parser.removeErrorListeners();

lexer.addErrorListener({
    syntaxError: (_, __, line, column, msg) => {
        errores.push(`LEXICO (L${line}:C${column}): ${msg}`);
    }
});

parser.addErrorListener({
    syntaxError: (_, __, line, column, msg) => {
        errores.push(`SINTACTICO (L${line}:C${column}): ${msg}`);
    }
});

// === 1. Análisis sintáctico ===
const arbol = parser.programa();
if (!arbol) {
    throw new Error("❌ No se pudo generar el árbol de análisis");
}

if (errores.length > 0) {
    console.log("\n🔴 Errores encontrados:");
    console.log(errores.join('\n'));
    process.exit(1);
} else {
    console.log("\n📘 Análisis léxico y sintáctico: ✅ Sin errores.");
}

// === 2. Tabla de tokens ===
console.log("\n📗 TABLA DE TOKENS Y LEXEMAS:");
try {
    tokens.fill();

    const getTokenName = (tokenType) => {
        const symbolic = PilaLangLexer.symbolicNames?.[tokenType];
        if (symbolic && symbolic !== "null") return symbolic;

        const literal = PilaLangLexer.literalNames?.[tokenType];
        if (literal && literal !== "null") return literal;

        return `T_${tokenType}`;
    };

    tokens.tokens.forEach(token => {
        if (token.type !== -1) {
            const tokenName = getTokenName(token.type);
            const tokenText = token.text
                ? token.text.replace(/\r/g, '\\r').replace(/\n/g, '\\n')
                : '';
            console.log(`Línea ${token.line}: ${tokenName.padEnd(15)} = ${tokenText}`);
        }
    });

    if (tokens.tokens.length <= 1) {
        console.log("No se encontraron tokens en el input");
    }
} catch (error) {
    console.error("Error al generar tabla de tokens:", error.message);
    hasErrors = true;
}

// === 3. Árbol sintáctico ===
console.log("\n🌳 Árbol de Análisis Sintáctico:");
console.log(arbol.toStringTree(parser.ruleNames));

// === 4. Interpretación ===
const visitor = new CustomPilaLangVisitor();
visitor.visit(arbol);

console.log("\n📊 Resultado del análisis:");
console.log("Elementos en pila:", visitor.getEstado().elementos);
console.log("Errores:", visitor.getEstado().errores.length ? visitor.getEstado().errores : "Ninguno");

console.log('\n🤖 INTERPRETACIÓN:');
console.log('[Traducción a JavaScript]');
const jsCode = visitor.jsCode.join('\n');
console.log(jsCode);

try {
    console.log('\n🚀 Ejecución:');
    eval(jsCode);
    console.log("Estado final:", global[visitor.pilaName]);
} catch (error) {
    console.error("Error en ejecución:", error.message);
}




