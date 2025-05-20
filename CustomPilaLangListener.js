import PilaLangListener from './generated/PilaLangListener.js';

export default class CustomPilaLangListener extends PilaLangListener {
    constructor() {
        super();
        this.pila = [];
        this.errores = [];
    }

    // ==== Todos los métodos requeridos por la gramática ====
    enterPrograma(ctx) {}
    exitPrograma(ctx) {}
    enterComandos(ctx) {}
    exitComandos(ctx) {}
    enterOperacion(ctx) {}
    exitOperacion(ctx) {}
    enterValor(ctx) {}
    exitValor(ctx) {}
    enterLista(ctx) {}
    exitLista(ctx) {}
    enterNombre(ctx) {}
    exitNombre(ctx) {}

    // ==== Lógica de las operaciones ====
    enterCrear(ctx) {
        try {
            const valores = ctx.lista().valor().map(v => {
                const texto = v.getText();
                return v.NUMERO() ? parseInt(texto) : texto.slice(1, -1);
            });
            this.pila = [...valores];
        } catch (error) {
            this.errores.push(`Error en 'crear': ${error.message}`);
        }
    }

    enterPush(ctx) {
        const valor = ctx.valor().getText();
        const valorParseado = valor.includes('"') ? 
            valor.slice(1, -1) : 
            parseInt(valor);
        this.pila.push(valorParseado);
    }

    enterPop(ctx) {
        if (this.pila.length === 0) {
            this.errores.push("Error: Pila vacía al sacar");
        } else {
            this.pila.pop();
        }
    }

    enterPeek(ctx) {
        if (this.pila.length === 0) {
            this.errores.push("Error: Pila vacía al mirar");
        } else {
            console.log("Elemento en el tope:", this.pila[this.pila.length - 1]);
        }
    }

    getEstadoFinal() {
        return {
            elementos: this.pila,
            errores: this.errores
        };
    }
}