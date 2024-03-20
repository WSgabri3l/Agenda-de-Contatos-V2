/*
Nesse código, eu faço o controle do Modal, fazendo ele abrir e fechar.
E por meio dele eu adiciono a tabela na tela.
*/

const newContactButton = document.querySelector(".newContactButton")
const modalDiv = document.querySelector(".modal")
const closeButton = document.querySelector("#close");

newContactButton.addEventListener("click", (event) =>{
    
    modalDiv.style.display = "block";
})

closeButton.addEventListener("click", (event) =>{

    modalDiv.style.display = "none";

    console.log(localStorage.getItem("valueName"));
    console.log(localStorage.getItem("emailValue"));
    console.log(localStorage.getItem("phoneValue"));

    /* Aqui funciona se eu chamar a função... */
    newContact();
})