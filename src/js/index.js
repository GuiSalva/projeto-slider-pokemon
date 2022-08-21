/*

OBJETIVO 1 -  quando clicarmos na seta avançar temos que mostrar o próximo cartão da lista.
    - passo 1 - Dar um jeito de pegar o elemento HTML da seta avançar.
    - passo 2 - Dar um jeito de identificar o clique do usuário na seta avançar.
    - passo 3 - Fazer aparecer o próximo cartão da lista.
    - passo 4 -  Buscar o cartão que está selecionado e esconder.

OBJETIVO 2 -  quando clicarmos na seta voltar temos que mostrar o cartão anterior da lista.
    - passo 1 - Dar um jeito de pegar o elemento HTML da seta voltar.
    - passo 2 - Dar um jeito de identificar o clique do usuário na seta voltar.
    - passo 3 - Fazer aparecer o cartão anterior da lista.
    - passo 4 -  Buscar o cartão que está selecionado e esconder.

*/


const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
const cartaoSelecionado = document.querySelector(".selecionado");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostraCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {

    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostraCartao(cartaoAtual)

    
});

btnVoltar.addEventListener("click", function () {

    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostraCartao(cartaoAtual);

    
});