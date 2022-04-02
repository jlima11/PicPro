const listaOpcoes = document.querySelector(".secaoDetalhesConta_opcoesTransacoes")//Selecionando Lista

listaOpcoes.addEventListener("click",indentificarOpcoes)//Adicionando Escutador de Eventos

function indentificarOpcoes(event){ //excutando ação após o clique
    
    const li =event.target //Identificando onde ocorreu o clique

    if(li.tagName=="LI"){ //verificando se é um li
        const id = li.id//recuperando id
        
        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`) //selecionando a senção

        removeClasseMostrar()

        secaoEscolha.classList.add("mostrar")
    }
}

function removeClasseMostrar(){ //Função para remover li
    
    const divs = document.querySelectorAll(".secaoTransacao .container div")
     
    for(let i = 0; i < divs.length; i++){

       divs[i].classList.remove("mostrar")
        
    }
}