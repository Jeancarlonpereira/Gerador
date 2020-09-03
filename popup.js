//==============DECLARAÇÃO DE CONSTANTES DO MODAL REFERENTE A CATEGORIA==============\\
const addCategoria = document.querySelector("#btncat");
const modal = document.querySelector('#modal-wrapper');
const btnCancelarCategoria = modal.querySelector("#btncancel");
const btnSalvarCategoria = modal.querySelector("#btnsalvar");
const btnSalvarCategoriaMiddle = modal.querySelector("#btnsalvarMiddle");
const btnSalvarAlteracoesCategoria = modal.querySelector("#btnsalvarAlteracoes");
const mostrarRegraParada = modal.querySelector("#dropInterrup") 
const regrasDeParada = modal.querySelectorAll("#tipoInterrup")
const camposCategoria = document.querySelectorAll('[name="camposCategoria"]')

//==============ATRIBUIÇÃO DE EVENTOS==============\\
addCategoria.addEventListener('click', ()=>{adicionarCategoria(false)});
btnCancelarCategoria.addEventListener('click', fecharCategoria);
btnSalvarCategoria.addEventListener('click', salvarCategoria);
btnSalvarCategoriaMiddle.addEventListener('click', salvarCategoriaMiddle);
camposCategoria[4].addEventListener('click',showHideInterrup)
btnSalvarAlteracoesCategoria.addEventListener('click',salvarAlteracoesCat)


//==============DECLARAÇÃO DE FUNÇÕES DO POPUP CATEGORIA==============\\

//Função que abre o popup para adcionar uma nova categoria
function adicionarCategoria(middle = false, id){
	setTimeout(function(){camposCategoria[0].focus()
	},0)
	modal.querySelector("#salvar").classList.remove("salvar-alt")
	modal.querySelector("#btnsalvarAlteracoes").hidden = true;
	modal.querySelector("#btnsalvar").hidden = false;
	modal.style.display='block'; //Faz o modal aparecer
	body.style = 'overflow-y : hidden'
	if(middle){
		btnSalvarCategoria.hidden = true
		btnSalvarCategoriaMiddle.hidden = false
		btnSalvarCategoriaMiddle.setAttribute('name', id)
	}
	else{
		btnSalvarCategoriaMiddle.hidden = true
		btnSalvarCategoria.hidden = false

	}
};

//Função que fecha o popup quando é clicado em "Cancelar"
function fecharCategoria(){
	modal.style.display = "none";
	formularioCategoria.limparCategoria
	body.style = 'overflow-y : none'
	
}

//função que salva uma categoria criada
function salvarCategoria(){

	if(formularioCategoria.verificarCamposCategorias){
		let {id_cat} = categoria.criaCategoria
        formularioCategoria.armazenarCat
		anexarCategoria()
		addPergInstrucao(id_cat)
		attperguntasObjeto(id_cat)
		formularioCategoria.limparCategoria
		fecharCategoria()
		addLocalStorage()
	}
}

function salvarCategoriaMiddle(){
	if(formularioCategoria.verificarCamposCategorias){
		let {id_cat} = categoria.armazenaCategoriaMiddle(this.name)
		anexarCategoria()
		addPergInstrucao(id_cat)
		attperguntasObjeto(id_cat)
		formularioCategoria.limparCategoria
		fecharCategoria()
		renderForm()
	}
}

function salvarAlteracoesCat(){
	const idCategoriaEditada = btnSalvarAlteracoesCategoria.name
	if(formularioCategoria.verificarCamposCategorias){
		categoria.updateCategoria = idCategoriaEditada
		addPergInstrucao(idCategoriaEditada)
		attperguntasObjeto(idCategoriaEditada)
		fecharCategoria()
		// renderForm(idCategoriaEditada)
		renderForm()
	}
}

//Função que mostra o dropDown de interrupção caso a opção esteja selecionada
function showHideInterrup(){
	camposCategoria[4].checked ? mostrarRegraParada.hidden = false : mostrarRegraParada.hidden = true, 
	camposCategoria[5].selectedIndex = 0,
	getInterrup(camposCategoria[5]);
	[...regrasDeParada].map((valor)=>{valor.lastElementChild.value = ""})	
	}

//Função que abre os inputs das interrupções de acordo com a opçao do dropdown
function getInterrup(regraInterrupcaoSelecionada=this){
	regrasDeParada.forEach((element, index) => {
		index  == regraInterrupcaoSelecionada.selectedIndex -1 ? element.hidden = false : element.hidden = true
})

}

// //Função auto executavel para importação dos scripts
// setTimeout(()=>{import_JS()},0)

// function import_JS(){


// 	["dom_formulario.js","categorias.js","commun.js","perguntas.js","popup_perguntas.js"].forEach((script)=>{
// 		let imported = document.createElement('script');
// 		imported.src = `assets/js/${script}`;
// 		document.head.appendChild(imported);
// 	})

//     }