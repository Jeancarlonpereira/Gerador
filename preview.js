var botao = document.getElementById("btnPDF");
var pages = document.querySelectorAll("#page");
var alertMessage = document.getElementById("alertMessage");

//Get logo images
var lepesSIM = document.getElementById("LEPES_simbolo");
var fundSIM = document.getElementById("Fund_simbolo");
var sistIMG = document.getElementById("sist_logo");
var melqoIMG = document.getElementById("MELQO_logo");
var coverIMG = document.getElementById("cover");
var backCoverIMG = document.getElementById("back_cover");
var fundIMG = document.getElementById("Fund_logo");
var boaVistaIMG = document.getElementById("BoaVista_logo");
var lepesIMG = document.getElementById("LEPES_logo");

//Get PP tables
var brincarT = document.getElementById("LEPES_logo");
var escritaT = document.getElementById("LEPES_logo");
var expressivaT = document.getElementById("LEPES_logo");
var livroT = document.getElementById("LEPES_logo");
var matematicaT = document.getElementById("LEPES_logo");
var lepesIMG = document.getElementById("LEPES_logo");
var lepesIMG = document.getElementById("LEPES_logo");

//Get category icon images
var E_big_IMG = document.getElementById("E_big");
var E_small_IMG = document.getElementById("E_small");
var DME_big_IMG = document.getElementById("DME_big");
var DME_small_IMG = document.getElementById("DME_small");
var OSA_big_IMG = document.getElementById("OSA_big");
var OSA_small_IMG = document.getElementById("OSA_small");
var PP_big_IMG = document.getElementById("PP_big");
var PP_small_IMG = document.getElementById("PP_small");
var AD_big_IMG = document.getElementById("AD_big");
var AD_small_IMG = document.getElementById("AD_small");
var RH_big_IMG = document.getElementById("RH_big");
var RH_small_IMG = document.getElementById("RH_small");

//Get category icon images
var E_left_IMG = document.getElementById("E_left");
var E_rigth_IMG = document.getElementById("E_rigth");
var DME_left_IMG = document.getElementById("DME_left");
var DME_rigth_IMG = document.getElementById("DME_rigth");
var OSA_left_IMG = document.getElementById("OSA_left");
var OSA_rigth_IMG = document.getElementById("OSA_rigth");
var PP_left_IMG = document.getElementById("PP_left");
var PP_rigth_IMG = document.getElementById("PP_rigth");
var AD_left_IMG = document.getElementById("AD_left");
var AD_rigth_IMG = document.getElementById("AD_rigth");
var RH_left_IMG = document.getElementById("RH_left");
var RH_rigth_IMG = document.getElementById("RH_rigth");

//Get other images
var index_footer = document.getElementById("index_footer");
var back_coverIMG = document.getElementById("back_cover");

var indexElements = [{imgSmall:DME_small_IMG, imgBig:DME_big_IMG, color:"#f9ae60", name:"Disponibilidade e manutenção de instalação e equipamentos", iniName:"Disponibilidade e\nmanutenção de\ninstalação e\nequipamentos", description:"Essa seção apresenta informações sobre a existência de determinadas características de infraestrutura da pré-escola, que são relevantes para uma Educação Infantil de qualidade, bem como de informações sobre a manutenção de equipamentos, as condições de risco à segurança das crianças e a acessibilidade da pré-escola.\nRefletir sobre a organização do espaço físico permite analisar as possibilidades de oferecimento para as crianças de diferentes oportunidades de interações, entre elas e com os adultos, assim como oportunidades de desenvolver suas habilidades em atividades com uso de objetos e um entendimento do uso desses espaços (de forma coletiva ou individual).", sign:"DME", imgLeft:DME_left_IMG, imgRigth:DME_rigth_IMG, offset:[100]},
					 {imgSmall:RH_small_IMG, imgBig:RH_big_IMG, color:"#9f9cce", name:"Recursos humanos", iniName:"Recursos\nHumanos", description:"Essa seção apresenta informações gerais sobre os professores da rede de Educação Infantil, como perfil, experiências, qualificações, formação continuada e remuneração.\nRefletir sobre os aspectos que dizem respeito aos professores permite analisar as possibilidades de melhoria às condições de trabalho desses agentes, que possuem um papel fundamental na aprendizagem e desenvolvimento das crianças.", sign:"RH", imgLeft:RH_left_IMG, imgRigth:RH_rigth_IMG, offset:[60]},
					{imgSmall:OSA_small_IMG, imgBig:OSA_big_IMG, color:"#92c88d", name:"Organização da sala", iniName:"Organização\nda Sala", description:"Essa seção apresenta informações sobre os materiais pedagógicos, cantos, produção das crianças, além dos registros e portfólios.\nRefletir sobre o uso dos materiais em sala, cantos, produção das crianças e registros e portfólios, permite analisar as possibilidades de oferecimento para as crianças de diferentes oportunidades de interações, entre elas e com os adultos, entre elas e suas produções, bem como de acompanhar a aprendizagem e o desenvolvimento dessas crianças.", sign:"OSA", imgLeft:OSA_left_IMG, imgRigth:OSA_rigth_IMG, offset:[50]},
					 {imgSmall:PP_small_IMG, imgBig:PP_big_IMG, color:"#eb7071", name:"Práticas pedagógicas", iniName:"Práticas\nPedagógicas", description:"Essa seção apresenta informações sobre a existência ou não de determinadas oportunidades de aprendizagem, bem como da prática pedagógica utilizada pelo professor. Além disso, essa seção engloba informações relacionadas às interações, como: direcionamento do comportamento, atenção individualizada à criança e transições.\nRefletir sobre a prática pedagógica é tão importante que documentos oficiais como a Base Nacional Comum Curricular (BNCC) a coloca em lugar de destaque quando os campos de experiência, que dizem respeito à maneira como é organizado o trabalho, são pautados na prática (interações e brincadeiras) e não em segmentações (por disciplinas). Destaca-se que uma prática pedagógica qualificada é aquela em que os professores utilizam recursos para que, por meio de jogos e brincadeiras, as crianças tenham oportunidades de aprender, explorando criativamente o ambiente e as experiências propostas. Nestas práticas, os professores promovem oportunidades para que as crianças tenham escolhas de como se engajar com materiais e espaços, se expressem abertamente e façam relações entre suas aprendizagens e a vida cotidiana, de forma a integrar seus conhecimentos.", sign:"PP", imgLeft:PP_left_IMG, imgRigth:PP_rigth_IMG, offset:[100]},
					 {imgSmall:E_small_IMG, imgBig:E_big_IMG, color:"#67c5f0", name:"Engajamento", iniName:"Engajamento", description:"Essa seção apresenta informações sobre o engajamento dos agentes envolvidos na Educação Infantil, como os professores, pais ou responsáveis e as crianças. O envolvimento desses agentes se verifica na forma de perguntas aos professores sobre a satisfação com o trabalho, o planejamento, a composição da turma (crianças migrantes e uso de outra língua em sala) e envolvimento da pré-escola em situações críticas à segurança da criança; às famílias ou responsáveis sobre sua participação na tomada de decisão sobre o projeto político-pedagógico, plano de ação, além da sua participação nas discussões e avaliações das vivências e produções das crianças, bem como de sua satisfação com a qualidade da pré-escola; e por fim, o envolvimento das crianças é observado por meio do envolvimento nas atividades em sala, além de questões relacionadas à saúde das crianças e sua frequência à pré-escola.\nRefletir sobre o engajamento dos agentes envolvidos na Educação Infantil permite analisar as possibilidades de melhoria nas interações entre os agentes estabelecendo o papel de cada um na aprendizagem e desenvolvimento das crianças, com o objetivo de atingir o potencial que a Educação Infantil pode oferecer.", sign:"E", imgLeft:E_left_IMG, imgRigth:E_rigth_IMG, offset:[220]},
					 {imgSmall:AD_small_IMG, imgBig:AD_big_IMG, color:"#f498c0", name:"Aprendizagem e desenvolvimento", iniName:"Aprendizagem\ne Desenvolvimento", description:"Essa seção apresenta a aprendizagem e desenvolvimento das crianças das pré-escolas nos domínios avaliados pelo MELQO, que são Linguagem e Letramento, Matemática, Função Executiva e Desenvolvimento Socioemocional.\nÉ importante lembrar que esses resultados retratam um momento específico e não refletem as potencialidades das crianças, que estão em constante desenvolvimento. A relevância desses dados se deve à análise dos resultados que estão sendo alcançados pelas práticas específicas que estão sendo utilizadas, conforme apresentado em outras seções.\nAlém disso, a mesma sequência de atividades foi realizada pelas crianças das turmas de Pré 1 e Pré 2, o que permite observar nos resultados a seguir o desenvolvimento das habilidades e aquisição de conhecimentos que se dá ao longo dos dois anos em que as crianças frequentam a pré-escola.", sign:"AD", imgLeft:AD_left_IMG, imgRigth:AD_rigth_IMG, offset:[80,100]}];


function makePDF(data,manutencao){

	if(confirm("Deseja realizar o download da Devolutiva do ano de 2018?\nEsse processo pode demorar aproximadamente 2 minutos\n\n ATENÇÃO: Não feche esta página!")){
	}
	else{
		setTimeout(function(){botao.disabled=false;},100);
		return false;
	}

	//The doc.setSize() method use pt as unit and all Height named defined variables and maxWidth option into doc.text() method are in px.
	var doc = new jsPDF({unit:"pt", format:[794,1123]});
	var pageHeight = doc.internal.pageSize.height,
		pageWidth = doc.internal.pageSize.width,
		pageMarginLR = 75.00,
		pageMarginTB = 80.00,
		pageLineMarginLR = 30.00,
		pageLineMarginTB = 40.00,
		pageMaxWidth = (pageWidth-(2*pageMarginLR));

	console.log("INICIO");

	//Setup pre text pages
	setPreText(doc,pageWidth,pageHeight,pageMarginLR,pageMarginTB,pageLineMarginTB,pageMaxWidth,pageLineMarginLR,data);

//---------------------------------------------------------------------------------------------------

	//Setup text pages
	for(let i=0;i<pages.length;i++){
		let pageCategory = pages[i].attributes["name"].nodeValue,
			page = pages[i];


		doc.setPage(i+5);
		pages[i].className = "a4-wrap";


//------------------------------------------------TRANSFORMAR EM FUNÇÃO---------------------------------------------------

		//Even pages 
		if(i % 2 === 0){

			if(pageCategory === "PADRAO"){
				doc.line(pageLineMarginLR,pageLineMarginTB,(pageWidth-pageLineMarginLR),pageLineMarginTB); //Line at the top of the page
				doc.line(pageLineMarginLR,(pageHeight-pageLineMarginTB),(pageWidth-100),(pageHeight-pageLineMarginTB)); //Line at the  bottom of the page (in (pageWidth-150) the 150 is the rigth margin offset)
				doc.setFillColor("#0e84cc");
				doc.circle((pageWidth-pageLineMarginLR-22),(pageHeight-pageLineMarginTB),22,'F');
			}
			else if(pageCategory === "INDICE"){
				doc.line(pageLineMarginLR,pageLineMarginTB,(pageWidth-pageLineMarginLR),pageLineMarginTB); //Line at the top of the page
				setIndexPage(doc,pageWidth,pageHeight,pageMarginLR,pageMarginTB,pageLineMarginTB,pageMaxWidth,pageLineMarginLR,manutencao)
				doc.addPage();
				continue;
			}
			else if(/^[A-Z]{1,3}-INICIAL$/.test(pageCategory)){
				setPageConf(doc,pageCategory.split("-")[0],pageCategory.split("-")[1],pageWidth,pageHeight);
				doc.addPage();
				continue;
			}
			else{
				doc.line(pageLineMarginLR,pageLineMarginTB,(pageWidth-pageLineMarginLR),pageLineMarginTB); //Line at the top of the page
				doc.line(pageLineMarginLR,(pageHeight-pageLineMarginTB),(pageWidth-100),(pageHeight-pageLineMarginTB)); //Line at the  bottom of the page (in (pageWidth-150) the 150 is the rigth margin offset)
				//Page number circle config and set
				setPageConf(doc,pageCategory,"R",pageWidth,pageHeight);
				doc.circle((pageWidth-pageLineMarginLR-22),(pageHeight-pageLineMarginTB),22,'F');
			}

			//Page number config
			setPageTextConfig(doc,"helvetica","bold",18);
			doc.setTextColor("#ffffff");
			doc.text((i+5).toString(),(pageWidth-pageLineMarginLR-22),(pageHeight-pageLineMarginTB+5),{align:"center"})
		}
		//Odd pages
		else{

			if(pageCategory === 'PADRAO'){
				doc.line(pageLineMarginLR,pageLineMarginTB,(pageWidth-pageLineMarginLR),pageLineMarginTB); //Line at the top of the page
				doc.line(100,(pageHeight-pageLineMarginTB),(pageWidth-pageLineMarginLR),(pageHeight-pageLineMarginTB)); //Line at the  bottom of the page (in (pageWidth-150) the 150 is the rigth margin offset)
				doc.setFillColor("#0e84cc");
				doc.circle((pageLineMarginLR+22),(pageHeight-pageLineMarginTB),22,'F');
			}
			else if(pageCategory === "INDICE"){
				doc.line(pageLineMarginLR,pageLineMarginTB,(pageWidth-pageLineMarginLR),pageLineMarginTB); //Line at the top of the page
				setIndexPage(doc,pageWidth,pageHeight,pageMarginLR,pageMarginTB,pageLineMarginTB,pageMaxWidth,pageLineMarginLR,manutencao)
				doc.addPage();
				continue;
			}
			else if(/^[A-Z]{1,3}-INICIAL$/.test(pageCategory)){
				setPageConf(doc,pageCategory.split("-")[0],pageCategory.split("-")[1],pageWidth,pageHeight);
				doc.addPage();
				continue;
			}
			else{
				doc.line(pageLineMarginLR,pageLineMarginTB,(pageWidth-pageLineMarginLR),pageLineMarginTB); //Line at the top of the page
				doc.line(100,(pageHeight-pageLineMarginTB),(pageWidth-pageLineMarginLR),(pageHeight-pageLineMarginTB)); //Line at the  bottom of the page (in (pageWidth-150) the 150 is the rigth margin offset)
				//Page number circle config and set
				setPageConf(doc,pageCategory,"L",pageWidth,pageHeight);
				doc.circle((pageLineMarginLR+22),(pageHeight-pageLineMarginTB),22,'F');
			}
			//Page number config
			setPageTextConfig(doc,"helvetica","bold",18);
			doc.setTextColor("#ffffff");
			doc.text((i+5).toString(),(pageLineMarginLR+22),(pageHeight-pageLineMarginTB+5),{align:"center"})
		}

//---------------------------------------------------------------------------------------------------

		let imgCount = 0;
		//Page creation
		for(let elem of page.children){
			if(elem.className === "card-header"){
				for(let new_elem of elem.children){
						setPageTextConfig(doc,"helvetica","bold",22);
						setPageTextColor(doc,pageCategory);
						var header_pos = ((pageMarginTB/2)+25);
						doc.text(new_elem.innerText,pageMarginLR,header_pos,{maxWidth:pageMaxWidth-20,align:"left"});
				}
			}
			else if(elem.className === "card-body"){
				for(let new_elem of elem.children){
					if(new_elem.className === "card-text"){
						setPageTextConfig(doc,"helvetica","normal",15);

						let splitted_text = new_elem.innerText.split('\n');
						let text_lines = 0;
						var card_text_pos = header_pos+30;
						let note_count=0;

						for (let i=0;i<splitted_text.length;i++){
							setPageTextConfig(doc,"helvetica","normal",15);
							doc.setTextColor("#525557");

							if(i === 0){
								doc.text(splitted_text[i],pageMarginLR,card_text_pos,{maxWidth:pageMaxWidth-10,align:"justify"});
							}
							else{
								if (splitted_text[i].match('\#')){
									splitted_text[i]=splitted_text[i].replace('\\#','');
									doc.text(splitted_text[i],pageMarginLR,card_text_pos,{maxWidth:pageMaxWidth-10,align:"justify"});
								}
								else if (splitted_text[i].match('\@')){
									setPageTextConfig(doc,"helvetica","bold",22);
									setPageTextColor(doc,pageCategory);
									splitted_text[i]=splitted_text[i].replace('\\@','');
									doc.text(splitted_text[i],pageMarginLR,card_text_pos,{maxWidth:pageMaxWidth-10,align:"justify"});
								}
								else if (splitted_text[i].match('\&')){
									note_count+=1;
									splitted_text[i]=splitted_text[i].replace('\\&','');
									setPageTextConfig(doc,"helvetica","normal",7);
									doc.text(note_count.toString(),pageMarginLR,card_text_pos-5,{maxWidth:pageMaxWidth-10,align:"justify"});
									setPageTextConfig(doc,"helvetica","normal",11);
									doc.text(splitted_text[i],pageMarginLR+10,card_text_pos,{maxWidth:pageMaxWidth-10,align:"justify"});
								}
								else{
									doc.circle(pageMarginLR+10,card_text_pos-4,2,'F');
									doc.text(splitted_text[i],pageMarginLR+20,card_text_pos,{maxWidth:pageMaxWidth-25,align:"justify"});
								}
							}
							text_lines=doc.splitTextToSize(splitted_text[i],pageMaxWidth-30).length;
							card_text_pos+=(19*text_lines);
						}
					}
					else if(new_elem.id === "oqe"){
						setPageTextConfig(doc,"helvetica","normal",15);
						doc.setTextColor("#525557");

						let splitted_text = new_elem.innerText.split('\n');
						let oq_lines=0;
						var oq_pos=170;

						for (let i=0;i<splitted_text.length;i++){
							if(i === 0){
								doc.text(splitted_text[i],pageMarginLR,oq_pos,{maxWidth:pageMaxWidth,align:"justify"});
							}
							else{
								doc.circle(pageMarginLR+10,oq_pos-4,2,'F');
								doc.text(splitted_text[i],pageMarginLR+20,oq_pos,{maxWidth:pageMaxWidth,align:"justify"});
							}
							oq_lines=doc.splitTextToSize(splitted_text[i],pageMaxWidth-30).length;
							oq_pos+=(17*oq_lines);
						}
					}
					else if(new_elem.id === "como_melhorar_title"){
						var title_n_lines=0;
						setPageTextConfig(doc,"helvetica","normal",18);
						doc.setTextColor("#eb7071");
						doc.text(new_elem.innerText,pageMarginLR,lepes_table.height,{maxWidth:pageMaxWidth-20,align:"justify"});
						title_n_lines=doc.splitTextToSize(new_elem.innerText,pageMaxWidth-30).length;
					}
					else if(new_elem.id === "como_melhorar"){
						setPageTextConfig(doc,"helvetica","normal",15);
						doc.setTextColor("#525557");

						let splitted_text = new_elem.innerText.split('\n');
						let n_lines=0;
						var text_pos=lepes_table.height+(18*title_n_lines);

						for (let i=0;i<splitted_text.length;i++){
							if(i === 0){
								doc.text(splitted_text[i],pageMarginLR,text_pos,{maxWidth:pageMaxWidth-30,align:"justify"});
							}
							else{
								doc.circle(pageMarginLR+10,text_pos+21,2,'F');
								doc.text(splitted_text[i],pageMarginLR+20,text_pos,{maxWidth:pageMaxWidth-30,align:"justify"});
							}
							n_lines=doc.splitTextToSize(splitted_text[i],pageMaxWidth-30).length;
							text_pos+=(18*n_lines);
						}
					}
					else if(new_elem.id === "como_melhorar_title-2019-simple"){
						setPageTextConfig(doc,"helvetica","normal",18);
						doc.setTextColor("#eb7071");
						doc.text(new_elem.innerText,pageMarginLR,lepes_table.height+130,{maxWidth:pageMaxWidth-20,align:"justify"});
						title_n_lines=doc.splitTextToSize(new_elem.innerText,pageMaxWidth-30).length;
					}
					else if(new_elem.id === "como_melhorar-2019-simple"){
						setPageTextConfig(doc,"helvetica","normal",15);
						doc.setTextColor("#525557");

						let splitted_text = new_elem.innerText.split('\n');
						let n_lines=0;
						var text_pos=lepes_table.height+(18*title_n_lines)+100;

						for (let i=0;i<splitted_text.length;i++){
							if(i === 0){
								doc.text(splitted_text[i],pageMarginLR,text_pos+35,{maxWidth:pageMaxWidth-30,align:"justify"});
							}
							else{
								if (splitted_text[i].match('\#')){
									splitted_text[i]=splitted_text[i].replace('\\#','');
									doc.text(splitted_text[i],pageMarginLR,text_pos,{maxWidth:pageMaxWidth-30,align:"justify"});
								}
								else{
									doc.circle(pageMarginLR+10,text_pos+30,2,'F');
									doc.text(splitted_text[i],pageMarginLR+20,text_pos+35,{maxWidth:pageMaxWidth-30,align:"justify"});
								}
							}
							n_lines=doc.splitTextToSize(splitted_text[i],pageMaxWidth-30).length;
							text_pos+=(17*n_lines);
						}
					}
					else if(new_elem.id === "como_melhorar_title_2019"){
						var title_n_lines=0;
						setPageTextConfig(doc,"helvetica","normal",18);
						doc.setTextColor("#eb7071");
						doc.text(new_elem.innerText,pageMarginLR+10,100,{maxWidth:pageMaxWidth-20,align:"justify"});
						title_n_lines=doc.splitTextToSize(new_elem.innerText,pageMaxWidth-30).length;
					}
					else if(new_elem.id === "como_melhorar_2019"){
						setPageTextConfig(doc,"helvetica","normal",15);
						doc.setTextColor("#525557");

						let splitted_text = new_elem.innerText.split('\n');
						let n_lines=0;
						var text_pos=(18*title_n_lines)+110;

						for (let i=0;i<splitted_text.length;i++){
							if(i === 0){
								doc.text(splitted_text[i],pageMarginLR+5,text_pos,{maxWidth:pageMaxWidth-30,align:"justify"});
							}
							else{
								if (splitted_text[i].match('\#')){
									splitted_text[i]=splitted_text[i].replace('\\#','');
									doc.text(splitted_text[i],pageMarginLR+5,text_pos,{maxWidth:pageMaxWidth-30,align:"justify"});
								}
								else{
									doc.circle(pageMarginLR+15,text_pos-4,2,'F');
									doc.text(splitted_text[i],pageMarginLR+25,text_pos,{maxWidth:pageMaxWidth-30,align:"justify"});
								}
							}
							n_lines=doc.splitTextToSize(splitted_text[i],pageMaxWidth-30).length;
							text_pos+=(18*n_lines);
						}
					}
					else if(new_elem.id === "lepes_table"){
						let lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',pageMarginLR,card_text_pos+60,lepes_table.width,lepes_table.height,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
					else if(new_elem.id === "lepes_conjunto_lego"){
						let lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',pageMarginLR,130,lepes_table.width-380,lepes_table.height-260,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
					else if(new_elem.id === "lepes_lego"){
						let lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',(pageWidth/2)-100,720,lepes_table.width,lepes_table.height,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
					else if(new_elem.id === "ad_table"){
						let lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',80,500,lepes_table.width-265,lepes_table.height-227,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
					else if(new_elem.id === "ad_autogestao"){
						let lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',100,650,lepes_table.width-550,lepes_table.height-250,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
					else if(new_elem.id === "ad_amabilidade"){
						let lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',100,650,lepes_table.width-550,lepes_table.height-170,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
					else if(new_elem.id === "ad_curiosidade"){
						let lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',80,650,lepes_table.width-550,lepes_table.height-80,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
					else if(new_elem.id === "ad_autocontrole"){
						let lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',40,650,lepes_table.width-550,lepes_table.height-100,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
					else if(new_elem.id === "ad_atencao"){
						let lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',80,650,lepes_table.width-550,lepes_table.height-100,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
					else if(new_elem.id === "ad_bem"){
						let lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',40,650,lepes_table.width-550,lepes_table.height-80,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
					else if(new_elem.id === "ad_original"){
						let lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',pageMarginLR+25,670,lepes_table.width,lepes_table.height,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
					else if(new_elem.id === "pp_table_original"){
						let lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',pageMarginLR,820,lepes_table.width,lepes_table.height,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
					else if(new_elem.id === "pp_table_original_individual"){
						let lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',pageMarginLR-17,600,lepes_table.width,lepes_table.height,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
					else if(new_elem.id === "sub"){
						let lepes_table = new_elem.firstElementChild
						setPageTextConfig(doc,"helvetica","normal",18);
						doc.setTextColor("#eb7071");
						doc.text(new_elem.innerText,pageMarginLR-165,155,{maxWidth:pageMaxWidth});
					}
					else if(new_elem.id === "pp_logo"){
						let lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',pageWidth-115,50,lepes_table.width,lepes_table.height,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
					else if(new_elem.id === "pp_table"){
						var lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',100,100,lepes_table.width-400,lepes_table.height-160,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
					else if(new_elem.id === "pp_table_2019_simple"){
						var lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',150,100,lepes_table.width,lepes_table.height,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
					else if(new_elem.id === "pp_table_2019"){
						var lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',150,550,lepes_table.width,lepes_table.height,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
					else if(new_elem.id === "pp_table_e"){
						let lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',100,100,lepes_table.width-400,lepes_table.height-350,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
					else if(new_elem.id === "pp_table_cma"){
						let lepes_table = new_elem.firstElementChild
						doc.addImage(lepes_table,'PNG',100,100,lepes_table.width-400,lepes_table.height-100,`${lepes_table.attributes["name"].nodeValue}_img`,'NONE',0);
					}
				}
			}
			else if(elem.id === "imgTitle"){
				for(let new_elem of elem.children){
					let innerPos = getInnerElementPosition(page,new_elem);
					if(imgCount === 0){
						if(new_elem.tagName === "P"){
							let pId = new_elem.id;
							switch(pId){
								case "title-paisagem":
									setPageTextConfig(doc,"helvetica","normal",15);
									doc.setTextColor("#525557");
									doc.text(new_elem.innerText,pageMarginLR+325,pageMarginTB,{maxWidth:pageMaxWidth,align:"center"});
									break;
								case "title":
									setPageTextConfig(doc,"helvetica","normal",15);
									doc.setTextColor("#525557");
									doc.text(new_elem.innerText,pageMarginLR+325,(pageMarginTB+20),{maxWidth:pageMaxWidth,align:"center"});
									break;
								case "title-2019-rh":
									setPageTextConfig(doc,"helvetica","normal",15);
									doc.setTextColor("#525557");
									doc.text(new_elem.innerText,pageMarginLR+325,(pageMarginTB-20),{maxWidth:pageMaxWidth,align:"center"});
									break;
								case "title-rh-2019-grande":
									setPageTextConfig(doc,"helvetica","normal",15);
									doc.setTextColor("#525557");
									doc.text(new_elem.innerText,pageMarginLR+325,(pageMarginTB),{maxWidth:pageMaxWidth,align:"center"});
									break;
								case "legend":
									setPageTextConfig(doc,"helvetica","normal",15);
									doc.setTextColor("#525557");
										doc.text(new_elem.innerText,(pageWidth*0.25),400,{maxWidth:pageMaxWidth,align:"center"});
									imgCount = 1;
									break;
								case "title-pp":
									setPageTextConfig(doc,"helvetica","normal",15);
									doc.setTextColor("#525557");
									doc.text(new_elem.innerText,pageMarginLR+325,oq_pos+10,{maxWidth:pageMaxWidth-50,align:"center"});
									break;
								case "title-pp-2019-bar":
									setPageTextConfig(doc,"helvetica","normal",15);
									doc.setTextColor("#525557");
									doc.text(new_elem.innerText,pageMarginLR+325,100,{maxWidth:pageMaxWidth-50,align:"center"});
									break;
								case "title-pp-2019":
									setPageTextConfig(doc,"helvetica","normal",15);
									doc.setTextColor("#525557");
									doc.text(new_elem.innerText,pageMarginLR+300,oq_pos+100,{maxWidth:pageMaxWidth-50,align:"center"});
									break;
								case "legend-pp":
									let splitted_text = new_elem.innerText.split('\n');
									let legend_n_lines=0;
									var legend_pos=pageMarginTB+pp_img_height+80;

									for (let i=0;i<splitted_text.length;i++){
										if(i === 0){
											doc.text(splitted_text[i],pageMarginLR,legend_pos,{maxWidth:pageMaxWidth-30,align:"justify"});
										}
										else{
											if (splitted_text[i].match('\#')){
												splitted_text[i]=splitted_text[i].replace('\\#','');
												doc.text(splitted_text[i],pageMarginLR,legend_pos,{maxWidth:pageMaxWidth-30,align:"justify"});
											}
											else{
												doc.circle(pageMarginLR+10,legend_pos-4,2,'F');
												doc.text(splitted_text[i],pageMarginLR+20,legend_pos,{maxWidth:pageMaxWidth-30,align:"justify"});
											}
										}
										legend_n_lines=doc.splitTextToSize(splitted_text[i],pageMaxWidth-30).length;
										legend_pos+=(18*legend_n_lines);
										imgCount = 1;
									}
									break;
							}
						}
						else if(new_elem.tagName === "IMG"){
							//IMAGEM DE CIMA
							let imgId = new_elem.id;
							switch(imgId){
								case "bar-paisagem":
									doc.addImage(new_elem,'PNG',pageMarginLR+150,-250,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',270);
									imgCount = 0;
									break;
								case "bar-original-grande":
									doc.addImage(new_elem,'PNG',pageMarginLR-40,150,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break;
								case "bar-original-grande-rh":
									doc.addImage(new_elem,'PNG',pageMarginLR-65,100,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break;
								case "bar-original":
									doc.addImage(new_elem,'PNG',pageMarginLR,150,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break;
								case "bar-original-individual":
									doc.addImage(new_elem,'PNG',pageMarginLR+150,150,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break;
								case "bar-original-individual-e":
									doc.addImage(new_elem,'PNG',pageMarginLR+170,150,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break;
								case "bar-original-2019-rh":
									doc.addImage(new_elem,'PNG',pageMarginLR,80,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break;
								case "bar":
									doc.addImage(new_elem,'PNG',pageMarginLR+40,150,new_elem.width-120,new_elem.height-150,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break;
								case "bar-2019":
									doc.addImage(new_elem,'PNG',pageMarginLR-30,150,new_elem.width-240,new_elem.height-45,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break;
								case "bar-osa":
									doc.addImage(new_elem,'PNG',pageMarginLR,150,new_elem.width-800,new_elem.height-170,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break
								case "bar-big-2019":
									doc.addImage(new_elem,'PNG',pageMarginLR-30,150,new_elem.width-565,new_elem.height-130,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break;
								case "bar-big":
									if(pageCategory === 'RH'){
										doc.addImage(new_elem,'PNG',pageMarginLR+30,150,new_elem.width-530,new_elem.height-160,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									}
									else if(pageCategory === 'PP'){
										doc.addImage(new_elem,'PNG',pageMarginLR+60,150,new_elem.width-400,new_elem.height-170,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									}
									else{
										doc.addImage(new_elem,'PNG',pageMarginLR+30,150,new_elem.width-530,new_elem.height-160,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									}
									imgCount = 1;
									break;
								case "pie":
									doc.addImage(new_elem,'PNG',pageMarginLR+30,150,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break;
								case "pie-2018":
									doc.addImage(new_elem,'PNG',pageMarginLR+95,150,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break;
								case "pie-desc":
									doc.addImage(new_elem,'PNG',pageMarginLR-10,450,new_elem.width-200,new_elem.height-100,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break;
								case "pie-big":
									doc.addImage(new_elem,'PNG',pageMarginLR+25,150,new_elem.width-100,new_elem.height-40,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break;
								case "pie-big-desc":
									doc.addImage(new_elem,'PNG',pageMarginLR+25,150,new_elem.width-100,new_elem.height-40,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									break;
								case "bar-ad":
									doc.addImage(new_elem,'PNG',50,150,new_elem.width-200,new_elem.height-150,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									break;
								case "bar-original-ad":
									doc.addImage(new_elem,'PNG',50,150,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									break;
								case "bar-original-pp":
									doc.addImage(new_elem,'PNG',pageMarginLR-20,150,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break;
								case "bar-pais":
									doc.addImage(new_elem,'PNG',pageMarginLR+50,150,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break;
								case "pie-pp":
									doc.addImage(new_elem,'PNG',pageMarginLR+100,oq_pos+50,new_elem.width-90,new_elem.height-40,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break;
								case "pie-pp-2019":
									doc.addImage(new_elem,'PNG',pageMarginLR+75,oq_pos+150,new_elem.width-90,new_elem.height-40,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break;
								case "bar-pp-2019":
									doc.addImage(new_elem,'PNG',pageMarginLR-55,130,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 1;
									break;
								case "bar-legend-pp":
									var pp_img_height = new_elem.height;
									doc.addImage(new_elem,'PNG',pageMarginLR+30,130,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									break;

							}
						}
					}
					else{
						if(new_elem.tagName === "P"){
							let pId = new_elem.id;
							switch(pId){
								case "title":
									setPageTextConfig(doc,"helvetica","normal",15);
									doc.setTextColor("#525557");
									doc.text(new_elem.innerText,pageMarginLR+325,(pageMarginTB+550),{maxWidth:pageMaxWidth,align:"center"});
									break;
								case "legend":
									setPageTextConfig(doc,"helvetica","normal",15);
									doc.setTextColor("#525557");
									doc.text(new_elem.innerText,(pageWidth*0.75),400,{maxWidth:pageMaxWidth,align:"center"});
									imgCount = 0;
									break;
								case "legend-osa":
									let splitted_text = new_elem.innerText.split('\n');
									let legend_n_lines=0;
									var legend_pos=670+osa_img_height+50;

									for (let i=0;i<splitted_text.length;i++){
										if(i === 0){
											doc.text(splitted_text[i],pageMarginLR,legend_pos,{maxWidth:pageMaxWidth-30,align:"justify"});
										}
										else{
											if (splitted_text[i].match('\#')){
												splitted_text[i]=splitted_text[i].replace('\\#','');
												doc.text(splitted_text[i],pageMarginLR,legend_pos,{maxWidth:pageMaxWidth-30,align:"justify"});
											}
											else{
												doc.circle(pageMarginLR+10,legend_pos-4,2,'F');
												doc.text(splitted_text[i],pageMarginLR+20,legend_pos,{maxWidth:pageMaxWidth-30,align:"justify"});
											}
										}
										legend_n_lines=doc.splitTextToSize(splitted_text[i],pageMaxWidth-30).length;
										legend_pos+=(18*legend_n_lines);
										imgCount = 0;
									}
									break;
								case "title-pp":
									setPageTextConfig(doc,"helvetica","normal",15);
									doc.setTextColor("#525557");
									doc.text(new_elem.innerText,pageMarginLR+325,(pageMarginTB+590),{maxWidth:pageMaxWidth-50,align:"center"});
									break;
								case "title-pp-mat":
									setPageTextConfig(doc,"helvetica","normal",15);
									doc.setTextColor("#525557");
									doc.text(new_elem.innerText,pageMarginLR+325,(pageMarginTB+630),{maxWidth:pageMaxWidth-50,align:"center"});
									break;
								case "title-rh-2019-grande":
									setPageTextConfig(doc,"helvetica","normal",15);
									doc.setTextColor("#525557");
									doc.text(new_elem.innerText,pageMarginLR+325,(pageMarginTB+385),{maxWidth:pageMaxWidth-50,align:"center"});
									break;
								case "title-2019-rh":
									setPageTextConfig(doc,"helvetica","normal",15);
									doc.setTextColor("#525557");
									doc.text(new_elem.innerText,pageMarginLR+325,(pageMarginTB+680),{maxWidth:pageMaxWidth-50,align:"center"});
									break;
							}
						}
						else if(new_elem.tagName === "IMG"){
							//IMAGEM DE BAIXO
							let imgId = new_elem.id;
							switch(imgId){
								case "bar-original-grande":
									doc.addImage(new_elem,'PNG',pageMarginLR-40,690,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 0;
									break;
								case "bar-original-2019-rh":
									doc.addImage(new_elem,'PNG',pageMarginLR-40,800,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 0;
									break;
								case "bar-original-grande-rh":
									doc.addImage(new_elem,'PNG',pageMarginLR-60,490,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 0;
									break;
								case "bar-original":
									doc.addImage(new_elem,'PNG',pageMarginLR,670,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 0;
									break;
								case "bar-original-ad":
									doc.addImage(new_elem,'PNG',400,150,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									break;
								case "bar-original-pp":
									doc.addImage(new_elem,'PNG',pageMarginLR-20,750,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 0;
									break;
								case "bar":
									doc.addImage(new_elem,'PNG',pageMarginLR+50,670,new_elem.width-140,new_elem.height-160,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 0;
									break;
								case "bar-2019":
									doc.addImage(new_elem,'PNG',pageMarginLR-65,670,new_elem.width-240,new_elem.height-55,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 0;
									break;
								case "bar-big":
									doc.addImage(new_elem,'PNG',pageMarginLR+20,670,new_elem.width-530,new_elem.height-140,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 0;
									break;
								case "bar-big-2019":
									doc.addImage(new_elem,'PNG',pageMarginLR,670,new_elem.width-530,new_elem.height-140,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 0;
									break;
								case "pie":
									doc.addImage(new_elem,'PNG',pageMarginLR+30,670,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 0;
									break;
								case "pie-2018":
									doc.addImage(new_elem,'PNG',pageMarginLR+95,670,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 0;
									break;
								case "pie-legend-osa":
									var osa_img_height = new_elem.height;
									doc.addImage(new_elem,'PNG',pageMarginLR+120,670,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									break;
								case "pie-2019":
									doc.addImage(new_elem,'PNG',pageMarginLR,670,new_elem.width-60,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 0;
									break;
								case "pie-desc":
									doc.addImage(new_elem,'PNG',pageMarginLR-30,950,new_elem.width-200,new_elem.height-100,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 0;
									break;
								case "pie-big":
									doc.addImage(new_elem,'PNG',pageMarginLR+25,670,new_elem.width-100,new_elem.height-40,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 0;
									break;
								case "bar-ad":
									doc.addImage(new_elem,'PNG',410,150,new_elem.width-200,new_elem.height-150,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									break;
								case "bar-pp":
									doc.addImage(new_elem,'PNG',pageMarginLR-30,690,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 0;
									break;
								case "bar-pp-mat":
									doc.addImage(new_elem,'PNG',pageMarginLR-30,730,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 0;
									break;
								case "bar-pp-2019-simple":
									doc.addImage(new_elem,'PNG',pageMarginLR-55,720,new_elem.width,new_elem.height,`${new_elem.attributes["name"].nodeValue}_img`,'NONE',0);
									imgCount = 0;
									break;
							}
						}
					}
				}
			}
		}

//---------------------------------------------------------------------------------------------------

		if(i === pages.length-1){
			doc.addPage();
			doc.addImage(back_coverIMG,'PNG',-70,-124,back_coverIMG.width+290,back_coverIMG.height+300,"bakc_coverIMG",'NONE',0);

			//INSTRUMENTO
			setPageTextConfig(doc,"helvetica","normal",55);
			doc.setTextColor("#0e84cc");
			doc.text("INSTRUMENTO",195,340);

			doc.addImage(melqoIMG,'PNG',30,390,225,42,"MELQOFIM",'NONE',0);
			setPageTextConfig(doc,"helvetica","bold",16);
			doc.setTextColor("#525557");
			doc.text("Measuring Early Learning Quality and Outcomes",280,398);
			setPageTextConfig(doc,"helvetica","normal",16);
			doc.text("Saiba mais sobre o instrumento acessando o link",280,415);
			doc.text("www.unesdoc.unesco.org/ark:/48223/pf0000248053", 280,432);


			//PARCEIROS
			setPageTextConfig(doc,"helvetica","normal",55);
			doc.setTextColor("#0e84cc");
			doc.text("PARCEIROS",225,550);

			doc.addImage(lepesSIM,'PNG',80,600,100,100,"LEPESFIM",'NONE',0);
			setPageTextConfig(doc,"helvetica","bold",16);
			doc.setTextColor("#525557");
			doc.text("Laboratório de Estudos e Pesquisas em Economia Social",280,628);
			setPageTextConfig(doc,"helvetica","normal",16);
			doc.text("Rua das Paineiras, Casa 11 - USP Ribeirão Preto",280,645);
			doc.text("+55 (16) 3315-3918", 280,662);
			doc.text("www.lepes.fearp.usp.br", 280,679);

			doc.addImage(fundSIM,'PNG',80,780,100,100,"FUNDFIM",'NONE',0);
			setPageTextConfig(doc,"helvetica","bold",16);
			doc.setTextColor("#525557");
			doc.text("Fundação Maria Cecilia Souto Vidigal",280,808);
			setPageTextConfig(doc,"helvetica","normal",16);
			doc.text("Rua Fidêncio Ramos, 195, Vila Olímpia, São Paulo",280,825);
			doc.text("+55 (11) 3330-2888", 280,842);
			doc.text("www.fmcsv.org.br", 280,859);

			doc.addImage(boaVistaIMG,'PNG',80,960,100,100,"BOAFIM",'NONE',0);
			setPageTextConfig(doc,"helvetica","bold",16);
			doc.setTextColor("#525557");
			doc.text("Prefeitura Municipal de Boa Vista",280,998);
			setPageTextConfig(doc,"helvetica","normal",16);
			doc.text("Rua General Penha Brasil, 1011, São Francisco, Boa Vista",280,1015);
			doc.text("+55 156", 280,1032);
			doc.text("www.boavista.rr.gov.br", 280,1049);

			//LAST PAGE
			doc.addPage();
			doc.addImage(coverIMG,'PNG',-129,-152,coverIMG.width+254,coverIMG.height+310,"LASTIMG",'NONE',0);

			continue
		}
		else{
			doc.addPage();
		}
		pages[i].removeAttribute("class");
	}

	console.log('FIM');
	doc.save('Devolutiva.pdf');

	setTimeout(function(){botao.disabled=false;},100);






}

//Functions

function setPageTextConfig(doc,font,style,size){
		doc.setFont(font,style);
		doc.setFontSize(size);
}

function setPageTextColor(doc,category){
	if(category === 'E'){
		doc.setTextColor("#67c5f0");
	}
	else if(category === 'DME'){
		doc.setTextColor("#f9ae60");
	}
	else if(category === 'OSA'){
		doc.setTextColor("#73e599");
	}
	else if(category === 'PP'){
		doc.setTextColor("#eb7071");
	}
	else if(category === 'AD'){
		doc.setTextColor("#f498c0");
	}
	else if(category === 'RH'){
		doc.setTextColor("#9f9cce");
	}
	else if(category === 'PADRAO'){
		doc.setTextColor("#0e84cc");
	}

}

function getInnerElementPosition(parentElem,childElem){
	var parentPos = parentElem.getBoundingClientRect(),
    	childPos = childElem.getBoundingClientRect(),
    	relativePos = {};

	relativePos.top = childPos.top - parentPos.top,
	relativePos.right = childPos.right - parentPos.right,
	relativePos.bottom = childPos.bottom - parentPos.bottom,
	relativePos.left = childPos.left - parentPos.left;

	return relativePos;
}


function setPageConf(doc,category,type,pageWidth,pageHeight){
	for(let elem of indexElements){
		if(elem.sign === category){
			switch(type){
				case 'R':
					doc.addImage(elem.imgRigth,'PNG',18,0,elem.imgRigth.width+200,elem.imgRigth.height+200,`${elem.sign}_rigth_IMG`,'NONE',0);
					doc.setFillColor(elem.color);
					doc.setTextColor(elem.color);					
					break;

				case 'L':
					doc.addImage(elem.imgLeft,'PNG',-80,0,elem.imgLeft.width+200,elem.imgLeft.height+200,`${elem.sign}_left_IMG`,'NONE',0);
					doc.setFillColor(elem.color)
					doc.setTextColor(elem.color);
					break;

				case 'INICIAL':
					let i = 0;
					let offset = 0;
					let descriptionArray = elem.description.split("\n")

					doc.setFillColor(elem.color);
					doc.setTextColor(elem.color);
					doc.rect(15,15,pageWidth-30,pageHeight-30,'F');
					if(category === 'OSA'){
						doc.addImage(elem.imgBig,'PNG',(pageWidth-(elem.imgBig.width-325)),(pageHeight-(elem.imgBig.height-325)),elem.imgBig.width-400,elem.imgBig.height-400,`${elem.sign}_initial_IMG`,'NONE',0);
					}
					else if(category === 'PP'){
						doc.addImage(elem.imgBig,'PNG',(pageWidth-(elem.imgBig.width-400)),(pageHeight-(elem.imgBig.height-325)),elem.imgBig.width-470,elem.imgBig.height-410,`${elem.sign}_initial_IMG`,'NONE',0);
					}
					else{
						doc.addImage(elem.imgBig,'PNG',(pageWidth-(elem.imgBig.width+100)),(pageHeight-(elem.imgBig.height+120)),elem.imgBig.width+25,elem.imgBig.height+25,`${elem.sign}_initial_IMG`,'NONE',0);
					}
					doc.setTextColor("#ffffff");
					setPageTextConfig(doc,"helvetica","bold",55)
					doc.text(elem.iniName,100,200)
					setPageTextConfig(doc,"helvetica","normal",16)

					for(let descriptions of descriptionArray){
						if(elem.offset.length > 1){
							doc.text(descriptions,100,(450+offset),{maxWidth:530,align:"justify"})
							offset += elem.offset[i];
							i += 1;
						}
						else{
							doc.text(descriptions,100,(450+offset),{maxWidth:530,align:"justify"})
							offset += elem.offset[0];
						}
					}
					break;
				
			}
		}
	}
}

function setPreText(doc,pageWidth,pageHeight,pageMarginLR,pageMarginTB,pageLineMarginTB,pageMaxWidth,pageLineMarginLR,data){
	let bottomLogoPosY = pageHeight-40;
	//Cover

	doc.setPage(1);


	//Add images
	doc.addImage(coverIMG,'PNG',-129,-152,coverIMG.width+254,coverIMG.height+310,"coverIMG",'NONE',0);
	doc.addImage(sistIMG,'PNG',0,0,220,220,"melqoIMG",'NONE',0);
	doc.addImage(boaVistaIMG,'PNG',pageWidth/2,bottomLogoPosY-60,70,60,"boaVistaIMG",'NONE',0);
	doc.addImage(fundIMG,'PNG',pageWidth/2+80,bottomLogoPosY-83,170,100,"fundIMG",'NONE',0);
	doc.addImage(lepesIMG,'PNG',pageWidth/2+240,bottomLogoPosY-100,120,120,"lepesIMG",'NONE',0);

	//Add text	
	setPageTextConfig(doc,"helvetica","normal",55);
	doc.setTextColor("#0e84cc");
	doc.text("DEVOLUTIVA",pageWidth/2-20,494,{maxWidth:356, align:"justify"});
	setPageTextConfig(doc,"helvetica","normal",33.12);
	doc.setTextColor("#0e84cc");
	doc.text("EDUCAÇÃO INFANTIL",pageWidth/2-18,528,{maxWidth:356, align:"justify"});
	setPageTextConfig(doc,"helvetica","normal",48.60);
	doc.setTextColor("#0e84cc");
	doc.text("EM BOA VISTA",pageWidth/2-19.5,570,{maxWidth:356, align:"justify"});

	//White page
	doc.addPage();

	//back-cover
	doc.addPage();
	doc.setPage(3);

	doc.addImage(back_coverIMG,'PNG',-70,-124,back_coverIMG.width+290,back_coverIMG.height+300,"bakc_coverIMG",'NONE',0);
	doc.line(pageLineMarginLR,(pageHeight-pageLineMarginTB),(pageWidth-pageLineMarginLR),(pageHeight-pageLineMarginTB)); //Line at the  bottom of the page (in (pageWidth-150) the 150 is the rigth margin offset)
	setPageTextConfig(doc,"helvetica","normal",60);
	doc.text("SISTEMA DE\nMONITORAMENTO DA\nEDUCAÇÃO INFANTIL",pageWidth/2,pageHeight/2,{align:"center"})	;
	setPageTextConfig(doc,"helvetica","normal",35);
	doc.text(`BOA VISTA,\n${data}`,pageWidth/2,(pageHeight-160),{align:"center"})	;
	
	//White page
	doc.addPage();
doc.addImage(back_coverIMG,'PNG',-70,-124,back_coverIMG.width+290,back_coverIMG.height+300,"bakc_coverIMG",'NONE',0);

	doc.addPage();
}



function setIndexPage(doc,pageWidth,pageHeight,pageMarginLR,pageMarginTB,pageLineMarginTB,pageMaxWidth,pageLineMarginLR,manutencao){
	let tableOffset = 0;

	//Index
//	doc.addPage();

	doc.line(pageLineMarginLR,pageLineMarginTB,(pageWidth-pageLineMarginLR),pageLineMarginTB); //Line at the top of the page

	//Add text
	setPageTextConfig(doc,"helvetica","normal",55);
	doc.setTextColor("#0e84cc");
	doc.text("ÍNDICE",pageWidth/2,152,{align:"center"});
	setPageTextConfig(doc,"helvetica","normal",20);
	doc.setTextColor("#525557");
	doc.text("    A presente devolutiva está segmentada em 6 categorias, conforme descritas a seguir.",pageMarginLR,215,{maxWidth:pageMaxWidth, align:"justify"});

	//Make table

	setPageTextConfig(doc,"helvetica","normal",18);
	doc.setTextColor("#525557");
	var i = manutencao ? 1 : 0;
	for(i;i<indexElements.length;i++){
		doc.setLineHeightFactor(1.0);
		doc.setDrawColor("#525557");
		doc.rect(((0.22*pageMaxWidth)+pageMarginLR),(286+tableOffset),(0.78*pageMaxWidth),98,'S');
		doc.setFillColor(indexElements[i].color);
		doc.rect(pageMarginLR,(286+tableOffset),(0.22*pageMaxWidth),98,'FD');

		if(i === 2){
			doc.addImage(indexElements[i].imgBig,'PNG',(0.22*pageMaxWidth)-30,(286+tableOffset+11.5),70,75,("index_"+i),'NONE',0);
		}
		else{
			doc.addImage(indexElements[i].imgBig,'PNG',(0.22*pageMaxWidth)-30,(286+tableOffset+11.5),70,70,("index_"+i),'NONE',0);
		}

		if(i === 0){
			doc.text(indexElements[i].name,((0.22*pageMaxWidth)+pageMarginLR+40),(320+tableOffset+(0.5*doc.getFontSize())),{maxWidth:(pageMaxWidth-pageMarginLR-(0.22*pageMaxWidth)),align:"left"});
		}
		else{
			doc.text(indexElements[i].name,((0.22*pageMaxWidth)+pageMarginLR+40),(330+tableOffset+(0.5*doc.getFontSize())),{maxWidth:(pageMaxWidth-pageMarginLR-(0.22*pageMaxWidth)),align:"left"});
		}

		tableOffset=tableOffset+98;
	}

	doc.addImage(index_footer,'PNG',-61,10,index_footer.width+240,index_footer.height+300,"index_footer",'NONE',0);

}

