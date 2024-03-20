/* 
Esse código captura as informações dos campos do formulário
e os salva dentro do cachê do navegador.
*/

/* Campos de captura de dados. */

const pictureField = document.querySelector("#picture");
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const numberField = document.querySelector("#phone");

/* Botão. */

const saveButton = document.querySelector(".saveButton");

/* 
Capturando os valores e os colocando dentro do cachê do navegador.
*/

saveButton.addEventListener("click", (event) =>{

    let picture = pictureField.files[0];

    let name = nameField.value;
    let email = emailField.value;
    let phone = numberField.value;

    localStorage.setItem("valueName", name);
    localStorage.setItem("emailValue", email);
    localStorage.setItem("phoneValue", phone);

    let reader = new FileReader();

    reader.readAsDataURL(picture);

    reader.addEventListener("load", (event) =>{

        sessionStorage.setItem("pictureSource", event.target.result);

    });

    //Chamando a função que adiciona tudo dentro da lista de contatos.

    /* Erro:
    Uncaught ReferenceError: newContact is not defined
    at HTMLInputElement.<anonymous> (newcontact.js:32:5)
    */

    //newContact();

});
