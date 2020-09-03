//==============DECLARAÇÃO DE CONSTANTES==============\\

const body = document.querySelector('body')
const modalQuestions = document.querySelector("#modal-questions");
const tipoQuestao = modalQuestions.querySelector("#questaoHeader")
const tituloNumeroQuestao = modalQuestions.querySelector("#nrPerg_")
const tituloItemQuestao = modalQuestions.querySelector("#itemPerg_")
const selectTipoQuestions = modalQuestions.querySelector("#options_type")
const divOpcaoDefault = modalQuestions.querySelector("#divInputOptions_0")
const opcaoDefault = modalQuestions.querySelector("#options_0")
const opcaoExtaDefault = modalQuestions.querySelector("#btnPlus_0")
const delOptDefault = modalQuestions.querySelector('#btnDel_0')
const opcaoLinkDefault = modalQuestions.querySelector('#btnLink_0')
const obrigatoria = modalQuestions.querySelector("#obg")
const dropOptions = modalQuestions.querySelector("#dropOptions")
const divOpcoes = modalQuestions.querySelector("#divOpcoesPai")
const btnCancelarQuestao = modalQuestions.querySelector('#btncancelQuestions')
const divAddQuestions = modalQuestions.querySelector("#provisorio")
const adcionarOpcoes = modalQuestions.querySelector("#moptions")
const modalInputExpand = modalQuestions.querySelector("#expand")
const inputExpand = modalQuestions.querySelector("#inputExpand")
const btnCloseExpandInput = modalQuestions.querySelector("#btnNokExpand")
const btnOkExpandInput = modalQuestions.querySelector("#btnOkExpand")
const titleExpand = modalQuestions.querySelector("#titleExpand")
const divStoreOptions = modalQuestions.querySelector("#divStoreOptions")
const btnSalvarPerg = modalQuestions.querySelector('#btnsalvarQuestions')
const btnSalvarAltPerg = modalQuestions.querySelector('#btnsalvarAlteracoesQuestions')
const selectOptionsList = modalQuestions.querySelector("#options_type_list")


//==============ATRIBUIÇÃO DE EVENTOS==============\\

btnCancelarQuestao.addEventListener('click', closeQuestions)
selectTipoQuestions.addEventListener('change', selecionarTipoQuestao)
opcaoExtaDefault.addEventListener('click',showOpcaoExtra)
setTimeout(()=>{opcaoLinkDefault.addEventListener('click',showGotoPerguntas)},0)
adcionarOpcoes.addEventListener('click', ()=>{criarOpcoes()})
btnCloseExpandInput.addEventListener('click',closeExpandInput)
btnOkExpandInput.addEventListener('click',saveExpandInput)
opcaoDefault.addEventListener('dblclick',expandInput)
opcaoDefault.addEventListener('input',enableDisableExtraBtn)
delOptDefault.addEventListener('click',delOpt)
btnSalvarPerg.addEventListener("click", salvarPergunta)
btnSalvarAltPerg.addEventListener('click', salvarPergEditada)
//==============DECLARAÇÃO DE FUNÇÕES==============\\

//Função que abre o modal para adicionar as questões
function openQuestions(idCategoria){
    changeBtnSavePerg(false)
    modalQuestions.style.display = "block";
    atribuirNumeroPergunta(idCategoria)
    body.style = 'overflow-y : hidden'
    const ordem = categorias[idCategoria].perguntasCat.length
    btnSalvarPerg.setAttribute('name', `${idCategoria}_${ordem+1}`)


}

//Função que fecha o modal das questões
function closeQuestions(){

    modalQuestions.style.display = "none";
    body.style = 'overflow-y : none'
    formularioPerguntas.limparPerguntas
    changeBtnSavePerg(false)

}

// //função que adiciona o numero respectivo da pergunta que será criada no titulo do modal
function atribuirNumeroPergunta(idCategoria){
    const lastPergCat =  categorias[idCategoria].perguntasCat.length
    const tipoCat = categorias[idCategoria].alfanumerica
    console.log(tipoCat)

    const elemTipo = categorias[0].perguntasCat.map(x=>x.tipo).filter((x)=>{
        return x != 'INSTRUCAO' && x!='NOTE'  && x!='MARCACAO'
        })["length"]
    if(lastPergCat == 0 ||  elemTipo == 0){
        tituloNumeroQuestao.innerText = categorias[idCategoria].numeroInicial
        tipoCat == "true" || tipoCat == true ? tituloItemQuestao.innerText = 'a' : tituloItemQuestao.innerText = ''
    }
    else {
        
        if(tipoCat == "false" || tipoCat == false){
        tituloNumeroQuestao.innerText = categorias[idCategoria].perguntasCat.map(x=>x.nro_pergunta).filter(x=>x).slice(-1).reduce((acc, value )=>{return acc = value},parseInt(categorias[idCategoria].numeroInicial)) + 1
        }
        else{
            alert()
            tituloNumeroQuestao.innerText = categorias[idCategoria].perguntasCat.map(x=>x.nro_pergunta).filter(x=>x).slice(-1).reduce((acc, value )=>{return acc = value},parseInt(categorias[idCategoria].numeroInicial))
            tituloItemQuestao.innerText = String.fromCharCode(categorias[0].perguntasCat.map(x=>x.item_pergunta).filter(x=>x).slice(-1)[0].charCodeAt() + 1)
        }
    }

}

//função que abre os tipos das perguntas e adiciona opçoes caso seja necessário
function selecionarTipoQuestao(){
tipoQuestao.innerText = 'QUESTÃO'
dropOptions.hidden = false
selectOptionsList.hidden = true
if(selectTipoQuestions.selectedIndex == 2 || selectTipoQuestions.selectedIndex == 3){
    formatTitlePerg(false)
}

else if(selectTipoQuestions.selectedIndex == 1){
    tipoQuestao.innerText = "INSTRUÇÃO"
    formatTitlePerg(true)
}
else if(selectTipoQuestions.selectedIndex == 7){
    tipoQuestao.innerText = "NOTA"
    formatTitlePerg(true)
}
else if(selectTipoQuestions.selectedIndex == 9){
    selectOptionsList.hidden = false
    divOpcoes.style.display = 'block'
    divStoreOptions.hidden = true
    divAddQuestions.hidden = true

}
 else{
    formatTitlePerg('default')   
}
}

//função que formata o titulo da pergunta no modal mostrando se é uma instrução ou uma pergunta numerica
function formatTitlePerg(param){
    if(param == true){
        divOpcoes.style.display = 'none', 
        divOpcaoDefault.hidden = true
        divAddQuestions.hidden = true
        tituloNumeroQuestao.hidden = true
        tituloItemQuestao.hidden = true
        
    }else if(param == false){
        divOpcaoDefault.hidden = false
        divAddQuestions.hidden = false
        tituloNumeroQuestao.hidden = false
        tituloItemQuestao.hidden = false
        divOpcoes.style.display = 'block'
        selectOptionsList.hidden = true
        divStoreOptions.hidden = false
    }
    else{
        divOpcoes.style.display = 'none', 
        divOpcaoDefault.hidden = true
        divAddQuestions.hidden = true
        tituloNumeroQuestao.hidden = false
        tituloItemQuestao.hidden = false

    }
    }



// função que abre o input extra na opção caso o usuário deseja adcionar uma resposta extra
function showOpcaoExtra(){
    const id = this.id.split('btnPlus_')[1]
    const divExtra = document.querySelector(`#extra_${id}`)
    if(this.firstElementChild.className == 'fas fa-plus' ){
        divExtra.hidden = false
        this.firstElementChild.classList.remove("fa-plus")
        this.firstElementChild.classList.add("fa-minus") 
    } else{
        divExtra.hidden = true
        this.firstElementChild.classList.remove("fa-minus")
        this.firstElementChild.classList.add("fa-plus") 
    }
    
}

//função que cria as opções dinamicamente nas perguntas de RADIO e SELECT
function criarOpcoes(alvo = -1, classGatilho = 'fas fa-unlink'){
const lastElement = [...modalQuestions.querySelectorAll('div[name=opcoes]')].length
hideShowDelButtonOpt(lastElement)
const divInputOptions = criarElementos('div',`divInputOptions_${lastElement}`,'opcoes',"opt",_,_,_,_,_,_,divStoreOptions)
const btnDropDrag = criarElementos('button',`btnDropDrag_${lastElement}`,'btn-drag-drop','drop-drag','button',_,_,_,_,_,divInputOptions)
criarElementos('i','iconExt',_,'fas fa-grip-vertical color-drag-drop',_,_,_,_,_,_, btnDropDrag)
const inputOpt = criarElementos('div',`inputOpt_${lastElement}`,_,'input-opt',_,_,_,_,_,_,divInputOptions)
const options = criarElementos('input', `options_${lastElement}`,'options', 'form-control','text',_,_,_,`Opção ${lastElement + 1}`,_,inputOpt)
const extra = criarElementos('div',`extra_${lastElement}`,_,'extra',_,_,_,_,_,true,inputOpt)
const arrowPlus = criarElementos('div', `arrowPlus_${lastElement}`,'arrow-plus','btn btn-primary-outline dbtn rotate-icon',_,_,_,_,_,_,extra)
criarElementos('i', 'iconDown',_,'fas fa-level-up-alt',_,_,_,_,_,_,arrowPlus)
criarElementos('input',`optionsExtra_${lastElement}`,'options-extra','input-extra form-control','text',_,_,_,'Outros',_,extra)
const selectExt = criarElementos('select', `selectExt_${lastElement}`,'question_ans','type-ext form-control input-extra box-extra',_,_,_,_,_,_,extra)
criarElementos('option',_,_,_,_,"",'Tipo',_,_,_,selectExt)
criarElementos('option',_,_,_,_,"TEXT",'Texto',_,_,_,selectExt)
criarElementos('option',_,_,_,_,"DATE",'Data',_,_,_,selectExt)
criarElementos('option',_,_,_,_,"NUM",'Número',_,_,_,selectExt)
const divDelOpt = criarElementos('div',`delOpt_${lastElement}`, _,'delbtn',_,_,_,_,_,_,divInputOptions)
const btnPlus = criarElementos('button',`btnPlus_${lastElement}`,'btn-plus','btn btn-primary-outline dbtn','button',_,_,_,_,_,divDelOpt)
criarElementos('i','iconExt',_,'fas fa-plus',_,_,_,_,_,_, btnPlus)
const btnLink = criarElementos('button',`btnLink_${lastElement}`,'btn-link','btn btn-primary-outline dbtn','button',alvo,_,_,_,_,divDelOpt)
criarElementos('i','iconLink',_,classGatilho,_,_,_,_,_,_, btnLink)
const btnDel = criarElementos('button',`btnDel_${lastElement}`,'btn-del','btn btn-primary-outline dbtn','button',_,_,_,_,_,divDelOpt)
criarElementos('i','iconDel',_,'far fa-trash-alt gen-del',_,_,_,_,_,_, btnDel)

btnPlus.addEventListener('click',showOpcaoExtra)
btnPlus.disabled = true
options.addEventListener('dblclick',expandInput)
options.addEventListener('input', enableDisableExtraBtn)
swapOptions(divStoreOptions)
btnDel.addEventListener('click', delOpt)
btnLink.addEventListener('click',showGotoPerguntas )
}

//função que habilita ou desabilita o botão de excluir a opçao caso ela seja a unica opção
function hideShowDelButtonOpt(qtdElemen){
const divDelOpt = modalQuestions.querySelector('#btnDel_0')
const dropDrag = modalQuestions.querySelector('#btnDropDrag_0')
if(qtdElemen > 0){
 divDelOpt.hidden = false
 dropDrag.hidden = false
}
else{
    divDelOpt.hidden  = true
    dropDrag.hidden = true
}

}

//função que abre um textarea no input da opção caso o usuário de doubleclick no campo
function expandInput(){
    const idOption = this.id.split('options_')[1]
    const text = this.value
    const titulo = this.placeholder
    titleExpand.innerText = titulo
    inputExpand.value = text
    inputExpand.id = idOption
    modalInputExpand.style.display = 'block'
    inputExpand.focus()



}

//função que fecha o textarea do input, descaratanto as alterações
function closeExpandInput(){
    modalInputExpand.style.display = 'none'
    inputExpand.value = ""
}

//função que salva o conteudo do textarea e coloca no input da opção
function saveExpandInput(){
    const setOptExpand = modalQuestions.querySelector(`#options_${inputExpand.id}`)
    const btnPlusOpt = modalQuestions.querySelector(`#btnPlus_${inputExpand.id}`)
    setOptExpand.value = inputExpand.value
    if(inputExpand.value == ""){ 
        btnPlusOpt.disabled = true
        modalQuestions.querySelector(`#extra_${inputExpand.id}`).hidden = true
        btnPlusOpt.firstElementChild.classList.remove("fa-minus")
        btnPlusOpt.firstElementChild.classList.add("fa-plus") 
}
else{
    btnPlusOpt.disabled = false

}
    inputExpand.value = ""
    modalInputExpand.style.display = 'none'


}

//função que permite que as opções sejam trocadas de lugar entre si
function swapOptions(targetButton){

    Sortable.create(targetButton, {
        handle: '.drop-drag',
        animation: 150,
        onChange: function () {
            reorganizarIdsOpcoes()

        }

    });
}

//função que exclui uma opção d questão caso seja necessário
function delOpt(){
    const idOption = this.id.split('btnDel_')[1]
    const optRemoved = modalQuestions.querySelector(`#divInputOptions_${idOption}`)
    divStoreOptions.removeChild(optRemoved)
    const lastElement = [...modalQuestions.querySelectorAll('div[name=opcoes]')].length - 1
    reorganizarIdsOpcoes()
    hideShowDelButtonOpt(lastElement)


}

//função que reorganiza os ids das opções caso elas sejam excluidas ou trocadas de lugar
function reorganizarIdsOpcoes(){

    
    [...modalQuestions.querySelectorAll("div[id^=divInputOptions_]")].forEach((div,index)=>{return div.id = `divInputOptions_${index}`});
    [...modalQuestions.querySelectorAll("button[id^=btnDropDrag_]")].forEach((button,index)=>{return button.id = `btnDropDrag_${index}`});
    [...modalQuestions.querySelectorAll("div[id^=inputOpt_]")].forEach((div,index)=>{return div.id = `inputOpt_${index}`});
    [...modalQuestions.querySelectorAll("input[id^=options_]")].forEach((input,index)=>{return input.id = `options_${index}`, input.placeholder = `Opção ${index+1}`});
    [...modalQuestions.querySelectorAll("div[id^=extra_]")].forEach((div,index)=>{return div.id = `extra_${index}`});
    [...modalQuestions.querySelectorAll("div[id^=arrowPlus_]")].forEach((div,index)=>{return div.id = `arrowPlus_${index}`});
    [...modalQuestions.querySelectorAll("input[id^=optionsExtra_]")].forEach((input,index)=>{return input.id = `optionsExtra_${index}`});
    [...modalQuestions.querySelectorAll("select[id^=selectExt_]")].forEach((select,index)=>{return select.id = `selectExt_${index}`});
    [...modalQuestions.querySelectorAll("div[id^=delOpt_]")].forEach((div,index)=>{return div.id = `delOpt_${index}`});
    [...modalQuestions.querySelectorAll("button[id^=btnPlus_]")].forEach((button,index)=>{return button.id = `btnPlus_${index}`});
    [...modalQuestions.querySelectorAll("button[id^=btnLink_]")].forEach((button,index)=>{return button.id = `btnLink_${index}`});
    [...modalQuestions.querySelectorAll("button[id^=btnDel_]")].forEach((button,index)=>{return button.id = `btnDel_${index}`});

    

}

//função que reseta as opções, no caso em que o modal é fechado
function resetOptions(){
    const linkDefault = modalQuestions.querySelector('#btnLink_0');
    [...modalQuestions.querySelectorAll("div[id^=divInputOptions_]")].filter((valor, index)=>{
        return index > 0
        }).forEach((valor)=>{
        divStoreOptions.removeChild(valor)
        });

        [...modalQuestions.querySelectorAll("button[id^=btnPlus_]")].forEach((valor)=>{
            valor.firstElementChild.className = 'fas fa-plus'
            valor.disabled = true})

        
    modalQuestions.querySelector('#extra_0').hidden = true
    linkDefault.value = -1
    if(linkDefault.firstElementChild.classList == 'fas fa-link'){
        linkDefault.firstElementChild.classList.remove('fa-link')
        linkDefault.firstElementChild.classList.add('fa-unlink')

    }
    
    selecionarTipoQuestao()
    hideShowDelButtonOpt(0)



    
}
//função que salva a pergunta criada
function salvarPergunta(){
    body.style = 'overflow-y : none'
    if(formularioPerguntas.verificarCamposPerguntas){
    let {id_cat, ordem, enunciado, nro_pergunta, item_pergunta, tipo,opcoesPerg,opcoesExtraPerg,subtipo,fixa} = pergunta.criaPergunta
    pergunta.armazenaPergunta(pergunta.criaPergunta)
    modalQuestions.style.display = "none";
    formularioPerguntas.limparPerguntas
    const divPerguntas = anexarPergunta(id_cat, ordem-1, enunciado,nro_pergunta,item_pergunta, tipo,fixa)
    console.log(tipo)
    console.log(subtipo)
    const novaPergunta = new criarPergunta(tipo,divPerguntas,opcoesPerg,opcoesExtraPerg,subtipo)
    novaPergunta.create()
    addLocalStorage()

    }
}

//função que desabilita o click do botão de adicionar questão extra caso não exista nenhum caracter no campo da opção.
//função que habilita o click do botão de adicionar questão extra caso  exista pelo menos um caracter no campo da opção.
function enableDisableExtraBtn(){
    const targetBtn = this.id.split('options_')[1]
    const btnPlus = modalQuestions.querySelector(`#btnPlus_${targetBtn}`)
    if(this.value.length > 0) {
        btnPlus.disabled = false
    }else{
        btnPlus.disabled = true
        modalQuestions.querySelector(`#extra_${targetBtn}`).hidden = true
        btnPlus.firstElementChild.classList.remove("fa-minus")
        btnPlus.firstElementChild.classList.add("fa-plus") 

    }
    
    }

    