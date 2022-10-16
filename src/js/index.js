/*
Objetivo - quando clicarmos na aba temos que mostrar
o conteúdo da aba que foi clicada pelo usuário e esconder 
o conteúdo da aba anterior */

//Passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
// pega todos os elementos que tem a classe aba no html
const abas = document.querySelectorAll(".aba");
// querySelectorAll - todos os elementos
// querySelector - um elemento
//forEach (para cada aba como se fosse um laço)
// forEach é feito para percorrer um elemento por vez
// pois addEventListener só pode ser adicionado a um elemento por vez

abas.forEach(aba => {
    //Passo 2 - dar um jeito de identificar o clique no elemento da aba 
    aba.addEventListener("click", function(){
        // se já tiver selecionado não rodar o código
        if(aba.classList.contains("selecionado")){
            return;
        }
        
        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba){
     //Passo 3 - quando o usuário clicar, desmarcar a aba selecionada
     const abaSelecionada = document.querySelector(".aba.selecionado");
     //classList pegar uma lista das classes do elemento
     abaSelecionada.classList.remove("selecionado");
     
     //Passo 4 - Marcar a aba clicada como selecionado
     //aba.classList.add("selecionado");
     aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
    //Passo 5- Esconder o conteúdo anterior 
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");
    
    // Passo 6 - Mostrar o conteúdo da aba selecionada
    //concatena o nome informacao com o id da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
    //pega o elemento com id igual a informacao-{id aba q clicou}
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    informacaoASerMostrada.classList.add("selecionado");
}