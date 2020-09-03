
const formularioCategoria ={

	get tituloCategoria() { return camposCategoria[0].value},
	set tituloCategoria(valor = "") { camposCategoria[0].value = valor },
	get tipoOrdenacao ()  {return camposCategoria[1].value},
	set tipoOrdenacao (valor = "")  {camposCategoria[1].value = valor},
	get numeroInicial () {return camposCategoria[2].value},
	set numeroInicial (valor = "") {return camposCategoria[2].value = valor},
	get inicial () { return camposCategoria[3].checked},
	set inicial (valor = false) { return camposCategoria[3].checked = valor},
	get regraDeParada ()  {return camposCategoria[4].checked},
	set regraDeParada (valor = false)  {return camposCategoria[4].checked = valor},
	get regraAtiva (){ return camposCategoria[5].selectedIndex},
	set regraAtiva (valor = 0){ return camposCategoria[5].selectedIndex = valor},
	get valorRegraAtiva ()  {
		let valorRetorno = -1
		if(formularioCategoria.regraDeParada){
			return [...regrasDeParada]
		.filter((ativa) => {return ativa.hidden == false})
		.reduce((acumulador,conteudo)=>{
			return conteudo.lastElementChild.value 
		}, valorRetorno)}
		 return -1
		},
	set valorRegraAtiva (valor = "")  {
		if(formularioCategoria.regraDeParada){
			return [...regrasDeParada]
		.filter((ativa) => {return ativa.hidden == false})
		.map((conteudo)=>{
			
			return conteudo.lastElementChild.value = valor
		})}
		},

	get verificarCamposCategorias(){
			const camposVazios = [formularioCategoria.tituloCategoria, formularioCategoria.tipoOrdenacao, formularioCategoria.numeroInicial,formularioCategoria.valorRegraAtiva]
			.reduce((campos,valores,index)=>{
				
					if(valores == ""){
						campos.push(index)

					}
					return campos
			},[])
			return camposVazios.length > 0 ? showMessages(1, camposVazios[0]) : true
		
		},
	get limparCategoria(){

			formularioCategoria.tituloCategoria = "";
			formularioCategoria.tipoOrdenacao = "";
			formularioCategoria.numeroInicial = "";
			formularioCategoria.inicial = false;
			formularioCategoria.regraDeParada = false;
			formularioCategoria.regraAtiva = "";
			[...regrasDeParada].map((valor)=>{valor.lastElementChild.value = ""})
			showHideInterrup();

	}

	
	

}

const formularioPerguntas ={

	get idCatPerg(){return btnSalvarPerg.name.split('_')[0]},
	get enunciadoPergunta(){ return CKEDITOR.instances.question_desc.getData()},
	set enunciadoPergunta(enunciado = ""){return CKEDITOR.instances.question_desc.setData(enunciado)},
	get nroPergunta(){return parseInt(tituloNumeroQuestao.innerText)},
	set nroPergunta(nroPergunta){return tituloNumeroQuestao.innerText = nroPergunta},
	status: 'ON',
	get tipoPergunta(){return selectTipoQuestions.value},
	set tipoPergunta(tipoPerg){return selectTipoQuestions.value = tipoPerg},
	get ordemPergunta(){return categorias[this.idCatPerg].perguntasCat.length + 1},
	get itemPergunta(){return tituloItemQuestao.innerText},
	set itemPergunta(itemPerg){return tituloItemQuestao.innerText = itemPerg},
	get obrigatoriedade(){return obrigatoria.checked},
	set obrigatoriedade(obgPerg){return obrigatoria.checked = obgPerg},
	get subtipoPergunta(){if(this.tipoPergunta == "LIST"){
		return modalQuestions.querySelector('#options_type_list').value
	}else{
		return "NENHUM"
	}},
	set subtipoPergunta(subTipo){return modalQuestions.querySelector('#options_type_list').value = subTipo},
	get gatilhoAlvo(){
		return [...modalQuestions.querySelectorAll("button[id^=btnLink_]")].filter(x=>x.value>=0).map(x=>x.id.split('_')[1])
	},
	setGatilhoAlvo(idCat,posix,index){
		if(categorias[idCat].perguntasCat[posix].gatilho_alvo.some(x=>x==0)){
			modalQuestions.querySelector('#btnLink_0').firstElementChild.classList.remove('fa-unlink')
			modalQuestions.querySelector('#btnLink_0').firstElementChild.classList.add('fa-link')
			modalQuestions.querySelector('#btnLink_0').value = Object.values(categorias[idCat].perguntasCat[posix].alvo[0])[0]
		}
		
		if(categorias[idCat].perguntasCat[posix].gatilho_alvo.some(x=>x==index)){
			
			return [(categorias[idCat].perguntasCat[posix].alvo).filter(x=>Object.keys(x) == index).flatMap(x=>Object.values(x))[0] ,'fas fa-link']
		}
		else{
			return [-1, 'fas fa-unlink']
		}
	},
	get alvoPergunta(){return [...modalQuestions.querySelectorAll("button[id^=btnLink_]")].filter(x=>x.value>=0).reduce((acc,link)=>{
		let id = link.id.split('_')[1]
		let value = link.value
		return acc.concat({[id]:value})
	},[])},
	set alvoPergunta(alvo){return alvo},
	get gatilhoPergunta(){return [...modalQuestions.querySelectorAll("button[id^=btnPlus_]")].map((valor, index)=>{
		if(valor.firstElementChild.className != 'fas fa-plus'){
			return index}
		}).filter((x)=>{return x!=undefined})},
	get opcoesPergunta(){
		if(this.tipoPergunta == "RADIO" || this.tipoPergunta == "SELECT") {
		return [...modalQuestions.querySelectorAll("input[id^=options_]")].map((valor)=>{return valor.value})}
	else{return []}},
	set AllOpcoesPergunta(valorOpt){return [...modalQuestions.querySelectorAll("input[id^=options_]")].map((valor)=>{return valor.value = valorOpt})},
	setOpcoesPergunta(idCat,posix){
		categorias[idCat].perguntasCat[posix].opcoesPerg.forEach((valor,index)=>{
			let gat = this.setGatilhoAlvo(idCat,posix,index+1)
			formularioPerguntas.opcoesPergunta = valor;
			[...modalQuestions.querySelectorAll("input[id^=options_]")].slice(-1)[0].value = valor
			divStoreOptions.querySelector(`#btnPlus_${index}`).disabled = false
			criarOpcoes(gat[0],gat[1])
		});
		[...modalQuestions.querySelectorAll("div[id^=divInputOptions_]")].slice(-1)[0].remove()
		hideShowDelButtonOpt(  [...modalQuestions.querySelectorAll('div[name=opcoes]')].length -1)

},
	get opcoesExtrasPerguntas() { return this.gatilhoPergunta.reduce((acc, num)=>{
				let tipo = document.querySelector(`#selectExt_${num}`).value
				let texto = document.querySelector(`#optionsExtra_${num}`).value
				let x = {[num]:{[tipo]:texto}}
				return acc.concat(x)
		},[]) 
	},
	set allOpcoesExtrasPerguntas(tipoExt) { return this.gatilhoPergunta.reduce((acc, num)=>{
		document.querySelector(`#selectExt_${num}`).value = tipoExt
		document.querySelector(`#optionsExtra_${num}`).value = ""
		return acc
},[]) 
},
	setOpcoesExtrasPerguntas(idCat,posix) {
		     const tiposExtra = categorias[idCat].perguntasCat[posix].opcoesExtraPerg.map((valor)=>{return Object.keys(Object.values(valor)[0])}).flat()
			 const valoresExtras = categorias[idCat].perguntasCat[posix].opcoesExtraPerg.map((valor)=>{return Object.values(Object.values(valor)[0])}).flat()
			 categorias[idCat].perguntasCat[posix].opcoesExtraPerg.map((valor)=>{return Object.keys(valor)}).flat().forEach((valor,index)=>{document.querySelector(`#extra_${valor}`).hidden = false
			 document.querySelector(`#optionsExtra_${valor}`).value = valoresExtras[index]
			 document.querySelector(`#selectExt_${valor}`).value = tiposExtra[index]
			 document.querySelector(`#btnPlus_${valor}`).firstElementChild.classList.remove("fa-plus")
			 document.querySelector(`#btnPlus_${valor}`).firstElementChild.classList.add("fa-minus") 
		
		 })
},
	get limparPerguntas(){
		this.enunciadoPergunta = ""
		this.nroPergunta = ""
		this.tipoPergunta = ""
		this.ordemPergunta = ""
		this.itemPergunta = ""
		this.obrigatoriedade = ""
		this.subtipoPergunta = ""
		this.alvoPergunta = ""
		this.gatilhoPergunta = ""
		this.AllOpcoesPergunta = ""
		this.allOpcoesExtrasPerguntas = ""
		resetOptions()
	},

	get verificarCamposPerguntas(){
        const enunciado = [formularioPerguntas.enunciadoPergunta].filter((valor)=>{return valor == ""})
		const tipoPergunta = [formularioPerguntas.tipoPergunta].filter((valor)=>{return valor == ""})
    if(formularioPerguntas.tipoPergunta == "RADIO" || formularioPerguntas.tipoPergunta == "SELECT"){
       const opcoes =  formularioPerguntas.opcoesPergunta.map((valor)=>{return valor}).reduce((acc, valor, index)=>{
            if(valor == ""){
                acc.push(index)
            }
        return acc
        }, [])
				const opcoesExtras =  formularioPerguntas.opcoesExtrasPerguntas.map((valor, index)=>{
					return (Object.values(Object.values(valor)[0]))
			}).reduce((acc,valor, index)=>{
				if(valor == ""){
						acc.push(index)}
			return acc
			},[])
    const tipoOpcaoExtra =  formularioPerguntas.opcoesExtrasPerguntas.map((valor, index)=>{
				return (Object.keys(Object.values(valor)[0]))
		}).reduce((acc,valor, index)=>{
			if(valor == ""){
					acc.push(index)}
		return acc
		},[])
 return [...enunciado, ...tipoPergunta,...opcoes,...opcoesExtras,...tipoOpcaoExtra].length > 0 ? showMessages(2) : true}
else if(formularioPerguntas.tipoPergunta == "MARCACAO"){
	return [...enunciado].length > 0 ? showMessages(2) : true
}
 else{return [...enunciado, ...tipoPergunta].length > 0 ? showMessages(2) : true}
     
    }
	
}


