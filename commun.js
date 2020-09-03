
const _ = undefined
// Função que formatar valores de inputs para aceitar somente numeros
function formatarValor(valor){
    return valor.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');

}

//Função responsavel por mostrar mensagens para o usuário
function showMessages(idMessage, argumentos) {

    if (idMessage == 1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Alguns campos não foram preechidos'
		}).then((result) => {
            if (result.value) {
				setTimeout(()=>{
					camposCategoria[argumentos].focus()
				},500) 
			}
		}

		)
		
	}

	if (idMessage == 2 ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Alguns campos não foram preechidos'
		})
		
	}
return false}



function criarElementos(elem="div", id = "", name = "", classe = "", tipo ="",valor ="", texto ="", title = "", placeholder = "", hidden = false, idPai = body){

    const node = document.createElement(elem)
    id == "" ? id : node.id = id
    name == "" ? name : node.setAttribute("name",name),
    classe == "" ? classe : node.className = classe,
    node.type = tipo,
    node.value = valor,
    node.innerText = texto
    title == "" ? title : node.title = title
    node.placeholder = placeholder
    node.hidden = hidden
    idPai.append(node)
    return node
}


function parseHTML(htmlCode) {

    htmlCode = htmlCode.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
    htmlCode = htmlCode.replace(/<title>/gi, "<title>META TAG (title): ");
    htmlCode = htmlCode.replace(/<link/gi, "<llink");
    htmlCode = htmlCode.replace(/<\/li><li>/gi, "</li><li>");
    htmlCode = htmlCode.replace(/<li/gi, "• <li");
    htmlCode = htmlCode.replace(/<llink/gi, "<link");
    htmlCode = htmlCode.replace(/<\/li>/gi, "\n");//"</li>"
    document.getElementById("tHide").innerHTML = htmlCode;
    htmlCode = document.getElementById("tHide").textContent;
    document.getElementById("tHide").style.display = "none";
    htmlCode = htmlCode.replace(/(||)/gm, "");
    // htmlCode = htmlCode.replace(/( )/gm, ""); //retira espaço
    // htmlCode = htmlCode.replace(/(	)/gm, " ");//retira tab
    htmlCode = htmlCode.replace(/(  )/gm, ""); //retira espaço duplo
    htmlCode = htmlCode.replace(/()/gm, "");
    htmlCode = htmlCode.replace(/()/gm, "");
    htmlCode = htmlCode.replace(/()/gm, "");
    htmlCode = htmlCode.replace(/()/gm, "");
    htmlCode = htmlCode.replace(/()/gm, "");
    htmlCode = htmlCode.trim();
    return (htmlCode)
}