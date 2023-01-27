/* 
    1 - Abrir modal ao clicar no botão

    2 - Fechar Modal ao clicar no X
*/

console.log('mostrar o document', document);

//OBJETIVO 1 - Passo 1 - Pegar o elemento que representa o botão na tela usando JS
console.log(document.querySelector(".botao-trailer"));

const botaoTrailer = document.querySelector(".botao-trailer")
const botaoFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.scr; 

function alternarModal(){
    modal.classList.toggle("aberto");
}

//Passo 2 - Identificar quando o usuário clicar no botão para abrir modal
botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

// Identificar quando o usuário clicar no X
botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});