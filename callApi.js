

const allForms = await fetch('http://monitoramentoei.fearp.usp.br:3000/categorias/1').then((response) => response.json()).then((responseJSON) => {
  return responseJSON
})
const allOpcoes = await fetch('http://monitoramentoei.fearp.usp.br:3000/opcoes/1').then((response) => response.json()).then((responseJSON) => {
  return responseJSON
})
const allOpcExtra = await fetch('http://monitoramentoei.fearp.usp.br:3000/perguntasExtras/1').then((response) => response.json()).then((responseJSON) => {
  return responseJSON
})
const allPerg = await fetch('http://monitoramentoei.fearp.usp.br:3000/perguntas/1').then((response) => response.json()).then((responseJSON) => {
  return responseJSON
})



let index = 0
for(let perguntas of allPerg){
        let arrPerguntas =[]
        let arrExtras = []
    for(let opcoes of allOpcoes){
        if(perguntas.id_perg == opcoes.id_perg){
              arrPerguntas.push(opcoes.conteudo)
            }
}
 for(let opcoesExtras of allOpcExtra){
        if(perguntas.id_perg == opcoesExtras.id_perg){
              arrExtras.push({[opcoesExtras.gatilho -1]:{[opcoesExtras.tipo]:opcoesExtras.conteudo}})
            }
}
perguntas.opcoesPerg = arrPerguntas
perguntas.opcoesExtraPerg = arrExtras
 if(perguntas.item_pergunta == null){
  perguntas.item_pergunta = ""
 }
 if(perguntas.nro_pergunta == null){
  perguntas.nro_pergunta = ""
 }
 if(perguntas.gatilho_alvo == null){
  perguntas.gatilho_alvo = []
  perguntas.alvo = []
 }
 else{
  perguntas.alvo = [perguntas.alvo] //por enquanto vem do banco como inteiro, mas qndo mudar vai vir como um array, ai é so remover essa linha
  perguntas.gatilho_alvo = [perguntas.gatilho_alvo] //esse tbm...
  perguntas.gatilho_alvo = perguntas.gatilho_alvo.map(x=>x-1)
  perguntas.alvo = perguntas.alvo.map(x=>x+perguntas.ordem)
  perguntas.alvo = perguntas.gatilho_alvo .map((valor,index)=>{
    return Object.fromEntries([[valor, perguntas.alvo[index]]])
})
 }

 index++  

}

formulario = allForms.filter(x=>x.id_form == 112); //112
for(let categorias of formulario){
    let pergCat =[]
    for(let perguntas of allPerg){
    if(categorias.id_cat == perguntas.id_cat){
    pergCat.push(perguntas)}
}
categorias.perguntasCat = pergCat
if(pergCat[0].nro_pergunta == null || pergCat[0].nro_pergunta == ""){
  categorias.numeroInicial = 1
  
}
  else{
    categorias.numeroInicial = pergCat[0].nro_pergunta
  }
}

formulario.map((valor, index)=>{
  valor.id_cat = index
  if(valor.valor == null){
      valor.valor = -1
}
return valor
})
categorias = formulario
addLocalStorage()
renderForm()
