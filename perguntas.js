
const pergunta ={

	get criaPergunta(){

        const perguntaSalva = {
            id_cat: formularioPerguntas.idCatPerg,
            enunciado: formularioPerguntas.enunciadoPergunta,
            nro_pergunta: formularioPerguntas.nroPergunta,
            status: formularioPerguntas.status,
            tipo: formularioPerguntas.tipoPergunta,
            ordem: formularioPerguntas.ordemPergunta,
            item_pergunta: formularioPerguntas.itemPergunta,
            obrigatoriedade: formularioPerguntas.obrigatoriedade,
            subtipo: formularioPerguntas.subtipoPergunta,
            gatilho_alvo : formularioPerguntas.gatilhoAlvo,
            alvo: formularioPerguntas.alvoPergunta,
            gatilho: formularioPerguntas.gatilhoPergunta,
            fixa: false,
            opcoesPerg: formularioPerguntas.opcoesPergunta,
            opcoesExtraPerg: formularioPerguntas.opcoesExtrasPerguntas
        
        }

           return   pergunta.ajustPergunta = perguntaSalva

},

set ajustPergunta(perguntaSalva){
    if(perguntaSalva.tipo == "INSTRUCAO" || perguntaSalva.tipo =="NOTE"){
        perguntaSalva.item_pergunta = ""
        perguntaSalva.nro_pergunta = ""
    }else if(perguntaSalva.opcoesExtraPerg != "" && (perguntaSalva.tipo == "RADIO" || perguntaSalva.tipo == "SELECT"  )){
        perguntaSalva.tipo = perguntaSalva.tipo + "TEXT"
    }
    else if(perguntaSalva.tipo == "MARCACAO" ){
        perguntaSalva.item_pergunta = ""
        perguntaSalva.nro_pergunta = ""
        perguntaSalva.fixa = true
    }
    else{
        perguntaSalva.opcoesExtraPerg = []
    }

   return perguntaSalva

},
armazenaPerguntaInstrucao(id_cat,enunciado,nro_pergunta,ordem, opcoesPerg){

    const perguntaSalvaInstrucao = {
        id_cat,
        enunciado,
        nro_pergunta,
        status: "ON",
        tipo: "MARCACAO",
        ordem,
        item_pergunta: "",
        obrigatoriedade: false,
        subtipo: "NENHUM",
        opcoesPerg,
        fixa: true
    
    }
    categorias[perguntaSalvaInstrucao.id_cat].perguntasCat =  categorias[perguntaSalvaInstrucao.id_cat].perguntasCat.concat([perguntaSalvaInstrucao])
    return perguntaSalvaInstrucao
},

armazenaPergunta(pergAjustada){

    categorias[pergAjustada.id_cat].perguntasCat =  categorias[pergAjustada.id_cat].perguntasCat.concat([pergAjustada])

},

updatePergunta(pergAjustada,index){
categorias[pergAjustada.id_cat].perguntasCat.splice(index,1,pergAjustada)
attperguntasObjeto(pergAjustada.id_cat)
}

}