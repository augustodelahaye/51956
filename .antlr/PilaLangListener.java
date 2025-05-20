// Generated from PilaLang.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link PilaLangParser}.
 */
public interface PilaLangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link PilaLangParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(PilaLangParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaLangParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(PilaLangParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaLangParser#comandos}.
	 * @param ctx the parse tree
	 */
	void enterComandos(PilaLangParser.ComandosContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaLangParser#comandos}.
	 * @param ctx the parse tree
	 */
	void exitComandos(PilaLangParser.ComandosContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaLangParser#operacion}.
	 * @param ctx the parse tree
	 */
	void enterOperacion(PilaLangParser.OperacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaLangParser#operacion}.
	 * @param ctx the parse tree
	 */
	void exitOperacion(PilaLangParser.OperacionContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaLangParser#crear}.
	 * @param ctx the parse tree
	 */
	void enterCrear(PilaLangParser.CrearContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaLangParser#crear}.
	 * @param ctx the parse tree
	 */
	void exitCrear(PilaLangParser.CrearContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaLangParser#push}.
	 * @param ctx the parse tree
	 */
	void enterPush(PilaLangParser.PushContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaLangParser#push}.
	 * @param ctx the parse tree
	 */
	void exitPush(PilaLangParser.PushContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaLangParser#pop}.
	 * @param ctx the parse tree
	 */
	void enterPop(PilaLangParser.PopContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaLangParser#pop}.
	 * @param ctx the parse tree
	 */
	void exitPop(PilaLangParser.PopContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaLangParser#peek}.
	 * @param ctx the parse tree
	 */
	void enterPeek(PilaLangParser.PeekContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaLangParser#peek}.
	 * @param ctx the parse tree
	 */
	void exitPeek(PilaLangParser.PeekContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaLangParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterValor(PilaLangParser.ValorContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaLangParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitValor(PilaLangParser.ValorContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaLangParser#lista}.
	 * @param ctx the parse tree
	 */
	void enterLista(PilaLangParser.ListaContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaLangParser#lista}.
	 * @param ctx the parse tree
	 */
	void exitLista(PilaLangParser.ListaContext ctx);
	/**
	 * Enter a parse tree produced by {@link PilaLangParser#nombre}.
	 * @param ctx the parse tree
	 */
	void enterNombre(PilaLangParser.NombreContext ctx);
	/**
	 * Exit a parse tree produced by {@link PilaLangParser#nombre}.
	 * @param ctx the parse tree
	 */
	void exitNombre(PilaLangParser.NombreContext ctx);
}