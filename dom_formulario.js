// "use strict"
const menu = document.querySelector("#menu");
const indexMenu = document.querySelector("#indexMenu");
const raiz = document.querySelector("#preview")
const mensagemSemFormulario = document.querySelector("#noForm")
const modalImport = document.querySelector('#exportQuestions')
const exportHome = document.querySelector('#exportHome')
const btnOkImport = document.querySelector('#okImport')
const btnOkShow = document.querySelector('#okShow')
const btnSalvarImport = document.querySelector('#btnsalvarImport')
const btnCancelImport = document.querySelector('#btncancelImport')
const typeQuestShow = document.querySelector('#typeShow')
const modalShow = document.querySelector('#showImportQuestions')
const modalGoto = document.querySelector('#gotoQuestions')
const btnSalvarGoto = document.querySelector('#btnsalvarGoto')
const gotoHome = document.querySelector('#gotoHome')
const btnCancelGoto = document.querySelector('#btncancelGoto')
const btnOkGoto = document.querySelector('#okGoto')




btnOkImport.addEventListener('click', ()=>{modalImport.style.display= 'none'; body.style = 'overflow-y : block'})
btnOkGoto.addEventListener('click', ()=>{modalGoto.style.display= 'none'; body.style = 'overflow-y : block'})
btnSalvarImport.addEventListener('click', importPerguntas)
btnCancelImport.addEventListener('click', ()=>{modalImport.style.display= 'none'; body.style = 'overflow-y : block'})
btnCancelGoto.addEventListener('click', ()=>{modalGoto.style.display= 'none';})
btnOkShow.addEventListener('click', ()=>{modalShow.style.display= 'none';})
btnSalvarGoto.addEventListener('click',vincular)


function anexarCategoria(idCategoria = categoria.idAtual, titulo = formularioCategoria.tituloCategoria){
    mensagemSemFormulario.hidden = true
    const fixa = categorias[idCategoria].fixa
    let hidden = false
    fixa ? hidden = true : hidden
    const divCatMiddle = criarElementos("div",`divMCat_${idCategoria}`, _,"div-middle",_,_,_,_,_,_,raiz);
    const btnAddMCat =criarElementos("input", `btnMCat_${idCategoria}`, "cat-middle","btn btn-middle", "button", "clique para adicionar uma categoria aqui!",_,_,_,_,divCatMiddle);
    const divCatStorage =  criarElementos("div", `catStorage_${idCategoria}`, _, "cat",_,_,_,_,_,_,raiz);
    const iconDelCat = criarElementos("i", `delcat_${idCategoria}`, "icon-del", "far fa-trash-alt  gen-del icon-cat",_,_,_,_,_,hidden,divCatStorage)
    iconDelCat.addEventListener("click",()=>{categoria.excluirCategoria = iconDelCat.id.split("delcat_")[1]})
    const iconEditCat = criarElementos("i",  `editcat_${idCategoria}`, "icon-edit", "far fa-edit icon-cat gen-edit edit_icon",_,_,_,_,_,_,divCatStorage);
    const iconImport = criarElementos("i", `import_${idCategoria}`, "icon-import", "far gen-maxmin icon-cat fas fa-file-upload",_,_,_,_,_,_,divCatStorage); 
    const divTitulo = criarElementos("div", `titulo_${idCategoria}`, "div-titulo", "rw",_,_,_,_,_,_,divCatStorage);
    criarElementos("h5", `titulo_preview_${idCategoria}`, "div-titulo", "txt-main",_,_,titulo,_,_,_,divTitulo);
    const pergStorage = criarElementos("div",`pergHomeCat_${idCategoria}` , "perg-home-cat", "cat-drag",_,_,_,_,_,_,divCatStorage)
    const cardInfo  = criarElementos("div",`info_${idCategoria}` , "info-no-questions", "card question-edited",_,_,_,_,_,_,pergStorage)
    criarElementos("h5",`info` , _, "card-info",_,_,"Ainda não há questões nessa categoria",_,_,_,cardInfo)
    const iconAddQstCat =criarElementos("input", `btnAddQstCat_${idCategoria}`, "Adicionar Questao", "btn btn-outline-primary", "button", "Adicionar Questao",_,_,_,_,divCatStorage);
    const indexBtn = criarElementos("input", `btnindex_${idCategoria}`, "btn-index-menu", "btn btn-outline-secondary index-menu", "button",idCategoria+1,_,titulo,_,_,indexMenu);
    swapCategorias(indexMenu)


//==============ATRIBUIÇÃO DE EVENTOS==============\\

btnAddMCat.addEventListener("click",()=>{adicionarCategoria(true, btnAddMCat.id.split("btnMCat_")[1])})
iconEditCat.addEventListener("click",()=>{categoria.editarCategoria = iconEditCat.id.split("editcat_")[1]});
indexBtn.addEventListener('click', ()=>{scrowView(indexBtn.id.split("btnindex_")[1])})
iconAddQstCat.addEventListener('click',()=>{openQuestions(iconAddQstCat.id.split("btnAddQstCat_")[1])})
iconImport.addEventListener('click', ()=>{showImportPerguntas(iconImport.id.split("import_")[1])})



}

function desanexarCategoria(id_categoria){
const filho = document.querySelector(`#catStorage_${id_categoria}`)
const index = document.querySelector(`#btnindex_${id_categoria}`)
raiz.removeChild(filho)
indexMenu.removeChild(index)

}

function reorganizarIdsCategoria(){

    [...raiz.querySelectorAll("div[id^=divMCat_]")].forEach((div,index)=>{ div.id = `divMCat_${index}`});
    [...raiz.querySelectorAll("input[id^=btnMCat_]")].forEach((div,index)=>{ div.id = `btnMCat_${index}`});
    [...raiz.querySelectorAll("div[id^=catStorage_]")].forEach((div,index)=>{ div.id = `catStorage_${index}`});
    [...raiz.querySelectorAll("div[id^=titulo_]")].forEach((div,index)=>{ div.id = `titulo_${index}`});
    [...raiz.querySelectorAll("div[id^=info_]")].forEach((div,index)=>{ div.id = `info_${index}`});
    [...raiz.querySelectorAll("div[id^=pergHomeCat_]")].forEach((div,index)=>{ div.id = `pergHomeCat_${index}`});
    [...raiz.querySelectorAll("i[id^=delcat_]")].forEach((icon,index)=>{ icon.id = `delcat_${index}`});
    [...raiz.querySelectorAll("i[id^=maxmin_]")].forEach((icon,index)=>{ icon.id = `maxmin_${index}`});
    [...raiz.querySelectorAll("h5[id^=titulo_preview_]")].forEach((h5,index)=>{ h5.id = `titulo_preview_${index}`});
    [...raiz.querySelectorAll("i[id^=editcat_]")].forEach((icon,index)=>{ icon.id = `editcat_${index}`});
    [...raiz.querySelectorAll("input[id^=btnAddQstCat_]")].forEach((input,index)=>{ input.id = `btnAddQstCat_${index}`});
    [...menu.querySelectorAll("input[id^=btnindex_")].forEach((input,index)=>{ input.id = `btnindex_${index}`, input.value = index+1});
    categorias.forEach((valor,index)=>{ valor.id_cat = index})
    

}

function reorganizarIdsPergs(){
    const catStorage = [...raiz.querySelectorAll("div[id^=catStorage_]")].length
    for(let i = 0; i < catStorage; i ++){
            [...raiz.querySelectorAll(`div[id^=pergHome_${i}]`)].forEach((div, index)=>{let parts = div.id.split('_')
            div.id = `pergHome_${parts[1]}_${index}`});
            [...raiz.querySelectorAll(`div[id^=headQuestions_${i}]`)].forEach((div, index)=>{let parts = div.id.split('_')
            div.id = `headQuestions_${parts[1]}_${index}`});
            [...raiz.querySelectorAll(`input[id^=btnDA_${i}]`)].forEach((div, index)=>{let parts = div.id.split('_')
            div.id = `btnDA_${parts[1]}_${index}`});
            [...raiz.querySelectorAll(`input[id^=btnDF_${i}]`)].forEach((div, index)=>{let parts = div.id.split('_')
            div.id = `btnDF_${parts[1]}_${index}`});
            [...raiz.querySelectorAll(`div[id^=preview_${i}]`)].forEach((div, index)=>{let parts = div.id.split('_')
            div.id = `preview_${parts[1]}_${index}`});
            [...raiz.querySelectorAll(`div[id^=footer_${i}]`)].forEach((div, index)=>{let parts = div.id.split('_')
            div.id = `footer_${parts[1]}_${index}`});
            [...raiz.querySelectorAll(`button[id^=btndelQst_${i}]`)].forEach((div, index)=>{let parts = div.id.split('_')
            div.id = `btndelQst_${parts[1]}_${index}` });
            [...raiz.querySelectorAll(`button[id^=btnEditQst_${i}]`)].forEach((div, index)=>{let parts = div.id.split('_')
            div.id = `btnEditQst_${parts[1]}_${index}`});
    }




}

function scrowView(elem) {
    const indexScroll = document.querySelector(`#catStorage_${elem}`) 
    window.scroll({
        top: indexScroll.offsetTop - 65,
        left: 0,
        behavior: 'smooth'
    });
}


function swapCategorias(divStoreOptions) {
    Sortable.create(divStoreOptions, {
        // handle: '.index-menu',
        animation: 0,
        onStart: function (evt) {
            start = evt.oldIndex
        },
        onChange: function (evt) {
           change = evt.newIndex
           return [categorias[start], categorias[change] ]  = [categorias[change], categorias[start] ], start = change
           
        },
        onEnd: function () {
            renderForm()
 }

    });

}

function anexarPergunta(idCategoria, ordem, enunciado,numero,item,tipoPerg,fixa){
    let tipoEnunPerg;
    let hidden = false
    fixa ? hidden = true : hidden
    tipoPerg == "INSTRUCAO" ? tipoEnunPerg ="INSTRUÇÃO" :  tipoPerg == "NOTE" ? tipoEnunPerg = "NOTA" : tipoPerg == "MARCACAO" ?  tipoEnunPerg = "INTERRUPÇÃO" : tipoEnunPerg = "QUESTÃO"
    raiz.querySelector(`#info_${idCategoria}`).hidden = true
    const pergHomeCat = raiz.querySelector(`#pergHomeCat_${idCategoria}`)
    const pergHome = criarElementos('div',`pergHome_${idCategoria}_${ordem}`,_,"card question-edited",_,_,_,_,_,_,pergHomeCat)
    const headQuestion =  criarElementos('div',`headQuestions_${idCategoria}_${ordem}`,"questao-head","rw",_,_,_,_,_,_,pergHome)
    const iconDuplicar = criarElementos("i", "duplicate", "icon-duplicate", "far gen-maxmin icon-cat fa-copy",_,_,_,_,_,hidden,headQuestion);
    const divMenuDuplicar = criarElementos('div',_,_,"menu-diplicar animate",_,_,_,_,_,true,headQuestion)
    const btnDuplicarA= criarElementos("input", `btnDA_${idCategoria}_${ordem}`, "duplicar-cima", "btn-menu-duplicar", "button", "Duplicar após essa questão",_,_,_,_,divMenuDuplicar);
    const btnDuplicarF = criarElementos("input", `btnDF_${idCategoria}_${ordem}`, "duplicar-fim", "btn-menu-duplicar", "button", "Duplicar no fim dessa categoria",_,_,_,_,divMenuDuplicar);
    iconDuplicar.addEventListener("click", openMenuDuplicar)
    btnDuplicarA.addEventListener("click", duplicarA)
    btnDuplicarF.addEventListener("click",  duplicarF)
    criarElementos('h5',"nrQuestion", "nr-questions","txt-main-center",_,_,tipoEnunPerg+" "+numero+" "+item,_,_,false,headQuestion)
    const adcionarEnunciado =  criarElementos('h5',"tituloQuestion", "titulo-questions","txt-main",_,_,_,_,_,false,headQuestion)
    const previewPerg = criarElementos('div',`preview_${idCategoria}_${ordem}`,_,"opt_style",_,_,_,_,_,_,pergHome)
    const footer = criarElementos('div',`footer_${idCategoria}_${ordem}`,"questao-footer","rw",_,_,_,_,_,_,pergHome)
    const btnDelQuestion = criarElementos("button",`btndelQst_${idCategoria}_${ordem}` , "btn-del-qst", "btn btn-primary-outline dbtn qst-right","button",_,_,_,_,hidden,footer)
    criarElementos("i", "iconDelBtn", "icon-del-btn", "far fa-trash-alt gen-del",_,_,_,_,_,_,btnDelQuestion);
    btnDelQuestion.addEventListener('click', excluirPergunta)
    const btnEditlQuestion = criarElementos("button",  `btnEditQst_${idCategoria}_${ordem}`, "btn-edit-qst", "btn btn-primary-outline dbtn qst-right","button",_,_,_,_,_,footer)
    criarElementos("i", "iconEditBtn", "icon-edit-btn", "far fa-edit gen-edit",_,_,_,_,_,_,btnEditlQuestion);
    btnEditlQuestion.addEventListener('click',editarPergunta)
   adcionarEnunciado.insertAdjacentHTML('beforeend', enunciado)
   
   return previewPerg
}


function criarPergunta(tipo,elementPai,opcoes,extra,subtipo){
    const parts = elementPai.id.split('preview')[1]
    const tipoPerguntas = {
        TEXT(){
        criarElementos("input", _, _, "form-control input-margin",_,_,_,_,"Insira sua resposta aqui",_,elementPai)
        },
        NUM(){
            criarElementos("input", _, _, "form-control input-margin",_,_,_,_,"Insira sua resposta aqui",_,elementPai)
        },
        DATE(){
            criarElementos("input", _, _, "form-control input-margin","date",_,_,_,"Insira sua resposta aqui",_,elementPai)

        },
        TIME(){
            criarElementos("input", _, _, "form-control input-margin","time",_,_,_,"Insira sua resposta aqui",_,elementPai)
        },
        RADIO(){
            opcoes.forEach((valor,index)=>{
                let nodeText =  criarElementos("div", `divOpt_${index}${parts}`, "opt", "opt_style",_,_,_,_,_,_,elementPai)
                 criarElementos("input", `input_${index}`, `radio${parts}`,"checkBox-radio","radio",_,_,_,_,_,nodeText).after(valor)
                //  nodeText.after(valor)
             })
        },
        RADIOTEXT(){
            opcoes.forEach((valor,index)=>{
                let nodeText =  criarElementos("div", `divOpt_${index}${parts}`, "opt", "opt_style",_,_,_,_,_,_,elementPai)
                 const radio = criarElementos("input", `input_${index}`, `radio${parts}`,"checkBox-radio","radio",_,_,_,_,_,nodeText)
                 radio.after(valor)
                 radio.addEventListener('click', openInputExtraRadio)

             })
             
             extra.forEach((x)=>{
                let nodeText = document.querySelector(`#divOpt_${Object.keys(x)[0]}${parts}`)
                
                let divPaiExtra =  criarElementos("div", `opExtra_${Object.keys(x)[0]}`,_,_,_,_,_,_,_,true,nodeText)
                let divExtra =  criarElementos("div", _ ,"opt","div-opt-extra",_,_,_,_,_,_,divPaiExtra)
                let btnExtra = criarElementos("button",_,_,"btn-arrow-extra","button",_,_,_,_,_,divExtra)
                criarElementos("i",_,_,"fas fa-level-up-alt rotate-icon",_,_,_,_,_,_,btnExtra)
                criarElementos("h5",_,_,"enun-extra",_,_,Object.values(Object.values(x)[0])[0],_,_,_,divExtra)
                criarElementos("input",_,"input-extra","form-control input-extra-preview",Object.keys(Object.values(x)[0])[0],_,_,_,"Insira sua resposta aqui",_,divPaiExtra)
            })

        },
        SELECT(){
            opcoes.forEach((valor,index)=>{
                let nodeText =  criarElementos("div", `divOpt_${index}${parts}`, "opt", "opt_style",_,_,_,_,_,_,elementPai)
                 criarElementos("input", `input_${index}`, `select-perg`,"checkBox-radio","checkbox",_,_,_,_,_,nodeText).after(valor)
             })
        },
        SELECTTEXT(){
            opcoes.forEach((valor,index)=>{
                
                let nodeText =  criarElementos("div", `divOpt_${index}${parts}`, "opt", "opt_style",_,_,_,_,_,_,elementPai)
                const check =  criarElementos("input", `input_${index}`, `select${parts}`,"checkBox-radio","checkbox",_,_,_,_,_,nodeText)
                check.after(valor)
                check.addEventListener('click',openInputExtraSelect)

             })

             extra.forEach((x)=>{
                 
                let nodeText = document.querySelector(`#divOpt_${Object.keys(x)[0]}${parts}`)
                let divPaiExtra =  criarElementos("div", `opExtra_${Object.keys(x)[0]}`,_,_,_,_,_,_,_,true,nodeText)
                let divExtra =  criarElementos("div", _ ,"opt","div-opt-extra",_,_,_,_,_,_,divPaiExtra)
                let btnExtra = criarElementos("button",_,_,"btn-arrow-extra","button",_,_,_,_,_,divExtra)
                criarElementos("i",_,_,"fas fa-level-up-alt rotate-icon",_,_,_,_,_,_,btnExtra)
                criarElementos("h5",_,_,"enun-extra",_,_,Object.values(Object.values(x)[0])[0],_,_,_,divExtra)
                criarElementos("input",_,"input-extra","form-control input-extra-preview",Object.keys(Object.values(x)[0])[0],_,_,_,"Insira sua resposta aqui",_,divPaiExtra)
            })

        },
        INSTRUCAO(){
                return true
        },
        NOTE(){
                return true
        },
        MARCACAO(){
            ["Não","Sim"].forEach((valor,index)=>{
                let nodeText =  criarElementos("div", `divOpt_${index}${parts}`, "opt", "opt_style",_,_,_,_,_,_,elementPai)
                 criarElementos("input", `input_${index}`, `instrucao${parts}`,"checkBox-radio","radio",_,_,_,_,_,nodeText).after(valor)
             })
        },
        LIST(){

                if(subtipo == "DIRETOR" || subtipo == "PROFESSOR"){
                    let extras = [{"1":{"TEXT":"Nome:"}}];
                    let op = ["Não","Sim"];
                    op.forEach((valor,index)=>{
                        let nodeText =  criarElementos("div", `divOpt_${index}${parts}`, "opt", "opt_style",_,_,_,_,_,_,elementPai)
                         const radio = criarElementos("input", `input_${index}`, `radio${parts}`,"checkBox-radio","radio",_,_,_,_,_,nodeText)
                         radio.after(valor)
                         radio.addEventListener('click', openInputExtraRadio)
        
                     })
                     
                     extras.forEach((x)=>{
                        let nodeText = document.querySelector(`#divOpt_${Object.keys(x)[0]}${parts}`)
                        
                        let divPaiExtra =  criarElementos("div", `opExtra_${Object.keys(x)[0]}`,_,_,_,_,_,_,_,true,nodeText)
                        let divExtra =  criarElementos("div", _ ,"opt","div-opt-extra",_,_,_,_,_,_,divPaiExtra)
                        let btnExtra = criarElementos("button",_,_,"btn-arrow-extra","button",_,_,_,_,_,divExtra)
                        criarElementos("i",_,_,"fas fa-level-up-alt rotate-icon",_,_,_,_,_,_,btnExtra)
                        criarElementos("h5",_,_,"enun-extra",_,_,Object.values(Object.values(x)[0])[0],_,_,_,divExtra)
                        criarElementos("input",_,"input-extra","form-control input-extra-preview",Object.keys(Object.values(x)[0])[0],_,_,_,"Insira sua resposta aqui",_,divPaiExtra)
                    })
                }
                else if (subtipo == "CONSENTIMENTO"){
                    ["Não","Sim"].forEach((valor,index)=>{
                        let nodeText =  criarElementos("div", `divOpt_${index}${parts}`, "opt", "opt_style",_,_,_,_,_,_,elementPai)
                         const radio = criarElementos("input", `input_${index}`, `radio${parts}`,"checkBox-radio","radio",_,_,_,_,_,nodeText)
                         radio.after(valor)
                         radio.addEventListener('click', openInputExtraRadio)
        
                     })
                }
                else if(subtipo == "DATA_NASCIMENTO" || subtipo == "DATE"){
                    criarElementos("input", _, _, "form-control","date",_,_,_,"Insira sua resposta aqui",_,elementPai)
                }
                else if(subtipo == "NOME_RESPONSAVEL"){
                    criarElementos("input", _, _, "form-control",_,_,_,_,"Insira sua resposta aqui",_,elementPai)
                }
                else if(subtipo == "TIME_INICIO" || subtipo == "TIME_TERMINO" ){
                    criarElementos("input", _, _, "form-control","time",_,_,_,"Insira sua resposta aqui",_,elementPai)
                }
                else{
                    let list = criarElementos("select", _, _, "form-control","list",_,_,_,_,_,elementPai)
                    criarElementos("option", _, _, "form-control","list",_,"lista pré-definida",_,_,_,list)

                }

        },
        ITENSANIMAIS(){
                for(let i =0;i<10;i++){
                        criarElementos("input", _, _, "form-control input-margin",_,_,_,_,`Opção ${i+1}`,_,elementPai)

                }
        }


    
}

const create = tipoPerguntas[tipo]
return {create}
}


function renderForm(){
    //O ideal é utilizar o textContent ao invez do innerHTML para limpar o conteudo.
    //Com o uso do innerHTML é possível injetar js, oq pode ocasionar em cross-site scripting
    //https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML
    raiz.textContent = "";
    indexMenu.textContent = ""
let index = 0;
for(let categoria of categorias){
    categoria.id_cat = index
    anexarCategoria(index,categoria.titulo)
    for (let perguntas of categorias[index].perguntasCat){
        let divPerguntas = anexarPergunta(perguntas.id_cat = index, perguntas.ordem-1, perguntas.enunciado,perguntas.nro_pergunta,perguntas.item_pergunta, perguntas.tipo,perguntas.fixa)
        let novaPergunta = new criarPergunta(perguntas.tipo,divPerguntas,perguntas.opcoesPerg,perguntas.opcoesExtraPerg,perguntas.subtipo)
        novaPergunta.create()
    }
    index+=1;

}
addLocalStorage()
}


function addPergInstrucao(idcat){
    

    if(categorias[idcat].id_inter > 0 ){
        const keepInstrucao = categorias[idcat].perguntasCat.filter((valor)=>{return valor.tipo == "MARCACAO"})
        if(keepInstrucao.length != ""){
            return true
        }else{
        let {id_cat,enunciado,ordem,tipo, opcoesPerg} = pergunta.armazenaPerguntaInstrucao(idcat,"<p>A regra de interrupção foi utiizada?</p>","", categorias[idcat].perguntasCat.length + 1,["Não", "Sim"])
        const divPerguntasInstrucao = anexarPergunta(id_cat, ordem-1,enunciado,"","","MARCACAO",true)
        const novaPerguntaInstrucao = new criarPergunta(tipo,divPerguntasInstrucao,opcoesPerg,"NENHUM")
        novaPerguntaInstrucao.create()
        }
    }
    else{
        const removeInstrucao = categorias[idcat].perguntasCat.filter((valor)=>{return valor.tipo != "MARCACAO"})
        categorias[idcat].perguntasCat = removeInstrucao
    }
}


function openMenuDuplicar(){

    if(this.nextElementSibling.hidden == false ){
        body.style = 'overflow-y : block'
        this.nextElementSibling.hidden = true
    }
    else{
        this.nextElementSibling.hidden = false
        body.style = 'overflow-y : hidden'
        setTimeout(()=>{body.addEventListener('click', () => {closeOutSide(event,this.nextElementSibling)})},0)

    }
    
    
}

function closeOutSide (event, div) {
        if (event.target != div) {
            div.hidden = true;
            body.style = 'overflow-y : block'
        event.currentTarget.removeEventListener(event.type, arguments.callee.caller);

        }
      }

function duplicarA(){
    const idCat = this.id.split('_')[1]
    const posix = parseInt(this.id.split('_')[2])
    const copy = Object.assign({}, categorias[idCat].perguntasCat[posix]);   
    copy.alvo = []
    copy.gatilho_alvo = []
    attLink(idCat,posix,+1)
    categorias[idCat].perguntasCat.splice(posix + 1,0,copy)
    attperguntasObjeto(idCat)
    renderForm()
    
}

function duplicarF(){
    const idCat = this.id.split('_')[1]
    const posix = this.id.split('_')[2]
    const copy = Object.assign({}, categorias[idCat].perguntasCat[posix]);   
    copy.alvo = []
    copy.gatilho_alvo = []
    categorias[idCat].perguntasCat.push(copy)
    attperguntasObjeto(idCat)
    renderForm()
}

 function attperguntasObjeto(idCategoria){

const tipoOrdenacao = categorias[idCategoria].alfanumerica
const numeroInicial = categorias[idCategoria].numeroInicial
categorias[idCategoria].perguntasCat.forEach((valor,index)=>{valor.ordem = index+1; valor.id_cat = idCategoria})

if(tipoOrdenacao == 'false' || tipoOrdenacao == false){
    categorias[idCategoria].perguntasCat.filter((valor)=>{return valor.tipo != "MARCACAO" && valor.tipo != "INSTRUCAO" && valor.tipo != "NOTE"}).reduce((acc,valor)=>{
    valor.nro_pergunta = acc
    valor.item_pergunta = ""
    return ++acc
},parseInt(numeroInicial))

     }

else{
    categorias[idCategoria].perguntasCat.filter((valor)=>{return valor.tipo != "MARCACAO" && valor.tipo != "INSTRUCAO" && valor.tipo != "NOTE"}).reduce((acc,valor)=>{
        valor.item_pergunta = acc
        valor.nro_pergunta = numeroInicial
        return acc = String.fromCharCode(acc.charCodeAt() + 1)
    },'a')

}

 }


 function attPerguntasIDCat(){
    let i = 0;
    for(let categoria of categorias){
        categoria.id_cat = i
            categoria.perguntasCat.forEach((pergunta)=>{pergunta.id_cat = i})
            i+=1
    }
 }

 function excluirPergunta(){
    const idCat = this.id.split('_')[1]
    const posix = this.id.split('_')[2]
    removeLink(idCat,posix)
    attLink(idCat,posix,-1)
    categorias[idCat].perguntasCat.splice(posix,1)
    attperguntasObjeto(idCat)
    renderForm()

 }

 function editarPergunta(){

    modalQuestions.style.display = "block"; //abre o popup das questões
    body.style = 'overflow-y : hidden' //desabilita o scroll da pagina
    changeBtnSavePerg(true)
    const idCat = this.id.split('_')[1] //obtem o IdCategoria da pergunta
    const posix = parseInt(this.id.split('_')[2]) //obtem a ordem  da pergunta dentro da categoria
    btnSalvarPerg.setAttribute('name', `${idCat}_${posix+1}`)
    btnSalvarAltPerg.setAttribute('name',posix)
    let tipoPerg = categorias[idCat].perguntasCat[posix].tipo //obtem o tipo da pergunta
    let subTipoPerg = categorias[idCat].perguntasCat[posix].subtipo //obtem o subtipo da pergunta

    tipoPerg == "RADIOTEXT" ? tipoPerg = "RADIO" : tipoPerg == "SELECTTEXT" ? tipoPerg = "SELECT" : tipoPerg == "INSTRUCAO" ? tipoQuestao.innerText = "INSTRUCAO" : tipoPerg == "NOTE" ? tipoQuestao.innerText = "NOTA" : tipoPerg == "MARCACAO" ? tipoQuestao.innerText = "INTERRUPÇÃO" : tipoQuestao.innerText = "QUESTÃO" //configura o titulo da questão conforme o tipo

    subTipoPerg == "DIRETOR" || subTipoPerg == "PROFESSOR" ? tipoPerg = "LIST" : 
    //Seta as informações no popup de perguntas resgantando do objeto categoria que está salvo
    formularioPerguntas.idCatPerg = categorias[idCat].perguntasCat[posix].id_cat
    formularioPerguntas.nroPergunta = categorias[idCat].perguntasCat[posix].nro_pergunta
    formularioPerguntas.itemPergunta = categorias[idCat].perguntasCat[posix].item_pergunta
    formularioPerguntas.enunciadoPergunta = categorias[idCat].perguntasCat[posix].enunciado
    formularioPerguntas.tipoPergunta = tipoPerg
    formularioPerguntas.obrigatoriedade = categorias[idCat].perguntasCat[posix].obrigatoriedade
    if(tipoPerg == "RADIO" || tipoPerg == "SELECT" ){ //se o tipo da pergunta for Radio ou SELECT é necessário criar as opções
    formatTitlePerg(false) //função que habilita ou desabiita o titulo do popup
    formularioPerguntas.setOpcoesPergunta(idCat,posix);
    formularioPerguntas.setOpcoesExtrasPerguntas(idCat,posix);
}
else if(tipoPerg == "LIST"){
    if(subTipoPerg == "DIRETOR" || subTipoPerg == "PROFESSOR" || subTipoPerg == "CONSENTIMENTO" || subTipoPerg == "ENDERECO" || subTipoPerg == "COD_ESCOLA"){
    selectOptionsList.hidden = false
    divOpcoes.style.display = 'block'
    formularioPerguntas.subtipoPergunta = categorias[idCat].perguntasCat[posix].subtipo
    }
    else{
        formularioPerguntas.subtipoPergunta = categorias[idCat].perguntasCat[posix].subtipo
        dropOptions.hidden = true
    }
}
else if(tipoPerg == "MARCACAO"){
    dropOptions.hidden = true
}
else if(tipoPerg == "DATE" && subTipoPerg =="DATE"){
    dropOptions.hidden = true
}
 }

 function salvarPergEditada(){
    body.style = 'overflow-y : none'
    if(formularioPerguntas.verificarCamposPerguntas){
    pergunta.updatePergunta(pergunta.criaPergunta,this.name)
    modalQuestions.style.display = "none";
    formularioPerguntas.limparPerguntas
    renderForm()

    }
 }


 function changeBtnSavePerg(editado){

    if(editado){
    btnSalvarPerg.hidden = true // esconde o botao de salvar pergunta
    btnSalvarAltPerg.hidden = false //habilita o botão de salvarModificações
    }
    else{
        btnSalvarPerg.hidden = false // esconde o botao de salvar pergunta
        btnSalvarAltPerg.hidden = true //habilita o botão de salvarModificações
    }

 }

function openInputExtraRadio(){

    [...this.parentElement.parentElement.querySelectorAll("div[id^=opExtra_]")].forEach(x=>x.hidden = true)
    if(this.nextElementSibling){
        this.nextElementSibling.hidden = false
    }
}

function openInputExtraSelect(){

    if(this.checked && this.nextElementSibling){
        this.nextElementSibling.hidden = false
    }
    else if(this.checked == false && this.nextElementSibling){
        this.nextElementSibling.hidden = true
    }
}


function showImportPerguntas(idCat){

    modalImport.style.display= 'block'
    body.style = 'overflow-y : hidden'
    btnSalvarImport.setAttribute('name', idCat)
    exportHome.textContent = ""
    const noExportQuestions = document.querySelector('#noExport')
    const perguntasImportadas = categorias.filter(x=>x.id_cat !=idCat).map((valor)=>{return valor.perguntasCat}).flat().filter(x=>x.fixa!=true)
    if(perguntasImportadas.length > 0){
        noExportQuestions.hidden = true
        btnOkImport.hidden = true
        btnSalvarImport.hidden = false
        btnCancelImport.hidden = false
        perguntasImportadas.forEach((perg)=>{
            const enunciado = parseHTML(perg.enunciado)
            const painel = criarElementos('div',_,'perg-export','painel-export',_,_,_,_,_,_,exportHome)
            const divCheck = criarElementos('div',_,'div-input','input-export',_,_,_,_,_,_,painel)
            criarElementos('input',`check_${perg.id_cat}_${perg.ordem}`,'check-input',_,'checkbox',_,_,_,_,_,divCheck)
            const divTitle = criarElementos('div',_,'title-perg-export','title-perg-export',_,_,_,_,_,_,painel)
            const formatTitle = criarElementos('div',_,'div-format-input','div-h5',_,_,_,_,_,_,divTitle)
            criarElementos('h5',_,_,'txt-main nowrap-text',_,_,enunciado,_,_,_,formatTitle)
            const divIcon = criarElementos('div',_,'div-icon',_,_,_,_,_,_,_,painel)
            const openShow =  criarElementos('i',`id_${perg.id_cat}_${perg.ordem}`,_,'fas fa-chevron-down icon-eye',_,_,_,_,_,_,divIcon)
            openShow.addEventListener('click', openPreviewImport)
        })
    
    }
    else{
        noExportQuestions.hidden = false
        btnOkImport.hidden = false
        btnSalvarImport.hidden = true
        btnCancelImport.hidden = true
    }


        }



function openPreviewImport(){
    modalShow.style.display= 'block';
    const idCat = this.id.split('_')[1]
    const posix = this.id.split('_')[2]
    const tipoQuestao = categorias[idCat].perguntasCat[posix-1].tipo
    tipoQuestao == "INSTRUCAO" ? typeQuestShow.innerText = "INSTRUÇÃO" : tipoQuestao == "NOTE" ? typeQuestShow.innerText = "NOTA" : typeQuestShow.innerText = "QUESTÃO" //configura o titulo da questão conforme o tipo
    const enunciado = parseHTML(categorias[idCat].perguntasCat[posix-1].enunciado)
    const opcoes = categorias[idCat].perguntasCat[posix-1].opcoesPerg
    const opcoesExtras = categorias[idCat].perguntasCat[posix-1].opcoesExtraPerg
    const subtipo = categorias[idCat].perguntasCat[posix-1].subtipo
    const divQuetions = document.getElementById('preview_Options');
    divQuetions.textContent = ""
    document.querySelector('#titulo_preview').textContent = enunciado
    const novaPerguntaImport = new criarPergunta(tipoQuestao,divQuetions,opcoes,opcoesExtras,subtipo)
    novaPerguntaImport.create()


}

function importPerguntas(){

    modalImport.style.display= 'none'; 
    body.style = 'overflow-y : block'
    const perguntasImporatadas = [...exportHome.querySelectorAll("input[id^=check_]")].filter(x=>x.checked).reduce((acc,perg)=>{
        console.log(perg)
        let ids = perg.id.split('_')
        return acc.concat(Object.assign({}, categorias[ids[1]].perguntasCat[ids[2]-1]))
    },[])
    perguntasImporatadas.forEach((perg)=>{perg.alvo = []
        perg.gatilho_alvo = [] })

    categorias[this.name].perguntasCat.push(...perguntasImporatadas)
    attperguntasObjeto(this.name)
    renderForm()

}



function showGotoPerguntas(){

    modalGoto.style.display= 'block'
    body.style = 'overflow-y : hidden'
    btnSalvarGoto.setAttribute('name', this.id.split('_')[1])
    gotoHome.textContent = ""
    const noGotoQuestions = document.querySelector('#noGoto')
    const idCat = btnSalvarPerg.name.split('_')[0]
    const posix = btnSalvarPerg.name.split('_')[1]
    const perguntasAnexadas = categorias[idCat].perguntasCat.filter(x=>x.ordem > posix).filter(x=>x.fixa!=true)
    if(perguntasAnexadas.length > 0){
        noGotoQuestions.hidden = true
        btnOkGoto.hidden = true
        btnSalvarGoto.hidden = false
        btnCancelGoto.hidden = false
        perguntasAnexadas.forEach((perg)=>{
            const enunciado = parseHTML(perg.enunciado)
            const painel = criarElementos('div',_,'perg-export','painel-export',_,_,_,_,_,_,gotoHome)
            const divCheck = criarElementos('div',_,'div-input','input-export',_,_,_,_,_,_,painel)
            const inputGoto = criarElementos('input',`check_${perg.ordem}`,'check-input',_,'checkbox',_,_,_,_,_,divCheck)
            const divTitle = criarElementos('div',_,'title-perg-export','title-perg-export',_,_,_,_,_,_,painel)
            const formatTitle = criarElementos('div',_,'div-format-input','div-h5',_,_,_,_,_,_,divTitle)
            criarElementos('h5',_,_,'txt-main nowrap-text',_,_,enunciado,_,_,_,formatTitle)
            const divIcon = criarElementos('div',_,'div-icon',_,_,_,_,_,_,_,painel)
            const openShow =  criarElementos('i',`id_${perg.id_cat}_${perg.ordem}`,_,'fas fa-chevron-down icon-eye',_,_,_,_,_,_,divIcon)
            openShow.addEventListener('click', openPreviewImport)
            inputGoto.addEventListener('click', onlyOneGoto)
        })
        if(this.value >=0){
            document.querySelector(`#check_${this.value}`).checked = true
        }
    }
    else{
        noGotoQuestions.hidden = false
        btnOkGoto.hidden = false
        btnSalvarGoto.hidden = true
        btnCancelGoto.hidden = true
    }


        }


function onlyOneGoto(){

    [...gotoHome.querySelectorAll('input[id^=check_')].forEach((input)=>{
        input != this ? input.checked = false : true
    });

    }


function vincular(){
    modalGoto.style.display= 'none';
    const  existGoto = [...gotoHome.querySelectorAll('input[id^=check_')].filter(x=>x.checked)
    const setLink =  modalQuestions.querySelector(`#btnLink_${this.name}`)


    if(existGoto.length > 0){
       setLink.firstElementChild.classList.remove("fa-unlink")
       setLink.firstElementChild.classList.add("fa-link")
       setLink.value = existGoto[0].id.split('_')[1]
    }
    else{
       setLink.firstElementChild.classList.remove("fa-link")
       setLink.firstElementChild.classList.add("fa-unlink")
       setLink.value = -1
    }

}

function attLink(idCat,posix,att){
    const lengthCat = categorias[idCat].perguntasCat.length
    posix = parseInt(posix)
    for(let i = 0; i<lengthCat; i++){
        categorias[idCat].perguntasCat[i].alvo.forEach((x,index)=>{
            if(Object.values(x)>posix + 1){
        return categorias[idCat].perguntasCat[i].alvo[index] = Object.fromEntries(Object.entries(x).map(([ key, val ]) => [ key, parseInt(val) + att ]))
        }})
    
        }
}

function removeLink(idCat,posix){
    posix = parseInt(posix)
    for(let i = posix; i>= 0; i--){
    let alvo_ = categorias[idCat].perguntasCat[i].alvo.filter(x=>Object.values(x) != posix+1)
    categorias[idCat].perguntasCat[i].alvo = alvo_
    let gatilhoAlvo = alvo_.map(x=>Object.keys(x)).flat()
    categorias[idCat].perguntasCat[i].gatilho_alvo = gatilhoAlvo

    }
}

function addLocalStorage(){

    localStorage.setItem("form",JSON.stringify(categorias))
}