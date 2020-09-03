

let categorias = JSON.parse(localStorage.getItem("form")) || [];
renderForm()
const categoria =  {

    idCategoria: -1,
    get idAtual(){return this.idCategoria},
    get getIdCategoria(){return ++this.idCategoria},
    get backIdCategoria(){if(this.idAtual == -1 || this.id_atual < -1){
        return -1
    }else{
        return --this.idCategoria
    }},
	get criaCategoria(){
    

        const categoriaSalva = {
            id_cat: this.getIdCategoria,
            titulo: formularioCategoria.tituloCategoria,
            alfanumerica: formularioCategoria.tipoOrdenacao,
            numeroInicial: formularioCategoria.numeroInicial,
            inicial: formularioCategoria.inicial,
            interrupcao: formularioCategoria.regraDeParada,
            id_inter: formularioCategoria.regraAtiva,
            valor: formularioCategoria.valorRegraAtiva,
            fixa: false,
            perguntasCat: []
        
        }
        categorias.push(categoriaSalva)
        return categoriaSalva
        },

        armazenaCategoriaMiddle(posix){
    

            const categoriaSalvaMidle = {
                id_cat: this.getIdCategoria,
                titulo: formularioCategoria.tituloCategoria,
                alfanumerica: formularioCategoria.tipoOrdenacao,
                numeroInicial: formularioCategoria.numeroInicial,
                inicial: formularioCategoria.inicial,
                interrupcao: formularioCategoria.regraDeParada,
                id_inter: formularioCategoria.regraAtiva,
                valor: formularioCategoria.valorRegraAtiva,
                fixa: false,
                perguntasCat: []
            
            }
            posix = parseInt(posix)
            categorias.splice(posix,0,categoriaSalvaMidle)
            attPerguntasIDCat()
            return categoriaSalvaMidle
            },
    /**
     * @param {string | number} idCategoria
     */
    set updateCategoria(idCategoria){

        const categoriaSalva = {
            titulo: formularioCategoria.tituloCategoria,
            alfanumerica: formularioCategoria.tipoOrdenacao,
            numeroInicial: formularioCategoria.numeroInicial,
            inicial: formularioCategoria.inicial,
            interrupcao: formularioCategoria.regraDeParada,
            id_inter: formularioCategoria.regraAtiva,
            valor: formularioCategoria.valorRegraAtiva
        
        }
        if(categoriaSalva.alfanumerica == "true" || categoriaSalva.alfanumerica == true){
            categorias[idCategoria].perguntasCat.filter(x => x.nro_pergunta).map((x)=>{x.nro_pergunta = categoriaSalva.numeroInicial})
            categorias[idCategoria].perguntasCat.filter(x => x.nro_pergunta).reduce((acc,valor)=>{
                valor.item_pergunta = acc
                return acc = String.fromCharCode(acc.charCodeAt() + 1)
            },'a')
        }
        else{
            categorias[idCategoria].perguntasCat.forEach((x)=>{x.item_pergunta = ""})
            categorias[idCategoria].perguntasCat.filter(x => x.nro_pergunta).reduce((acc,valor)=>{
                valor.nro_pergunta = acc
                return acc=acc+1  
            },parseInt(categoriaSalva.numeroInicial))

        }
        return categorias[idCategoria] = {...categorias[idCategoria], ...categoriaSalva}
        },

    /**
     * @param {string | number} idCategoria
     */
	set excluirCategoria(idCategoria){
        this.backIdCategoria
        categorias.splice(idCategoria,1)
        raiz.querySelector(`#divMCat_${idCategoria}`).remove()
        desanexarCategoria(idCategoria)
        reorganizarIdsCategoria()
        attPerguntasIDCat()
        categorias.length == 0 ? mensagemSemFormulario.hidden = false : mensagemSemFormulario.hidden =true
        addLocalStorage()       
        
    },
    /**
     * @param {string | number} idCategoria
     */
	set editarCategoria(idCategoria){

        modal.querySelector("#salvar").classList.add("salvar-alt")
        btnSalvarAlteracoesCategoria.hidden = false;
        btnSalvarAlteracoesCategoria.setAttribute('name', idCategoria)
        btnSalvarCategoria.hidden = true;
        btnSalvarCategoriaMiddle.hidden = true
        modal.style.display='block';
        formularioCategoria.tituloCategoria = categorias[idCategoria].titulo
        formularioCategoria.tipoOrdenacao = categorias[idCategoria].alfanumerica
        formularioCategoria.numeroInicial = categorias[idCategoria].numeroInicial
        formularioCategoria.inicial = categorias[idCategoria].inicial
        formularioCategoria.regraDeParada = categorias[idCategoria].interrupcao
        showHideInterrup()
        formularioCategoria.regraAtiva = categorias[idCategoria].id_inter
        getInterrup(camposCategoria[5])
        formularioCategoria.valorRegraAtiva = categorias[idCategoria].valor
        body.style = 'overflow-y : hidden'
        
    
    }

}


