/* 
Chama uma função no Script principal a partir do Formulário. 
*/

//Variáveis de controle da tabela.
const contactsTbody = document.querySelector(".contactsTbody");

function newContact(){

    //Criando as células da tabela.
    let nameCell = document.createElement("td");
    let emailCell = document.createElement("td");
    let phoneCell = document.createElement("td");

    //Criando a TR para as células.
    let elementTr = document.createElement("tr");
    elementTr.id = "newContact";

    //Adicionando os valores de cada elemento.
    nameCell.textContent = localStorage.getItem("valueName");
    emailCell.textContent = localStorage.getItem("emailValue");
    phoneCell.textContent = localStorage.getItem("phoneValue");

    //Criando os botões de editar e excluir.
    let editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.id = "edit";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.id = "delete";

    let buttonsCell = document.createElement("td");
    buttonsCell.id = "buttonsSpace";

/* -------------------------------------------------------------------------- */
    //Criando um espaço para receber e exibir a imagem de contato.

    //Célula da Imagem.
    let pictureCell = document.createElement("td");
    pictureCell.id = "pictureSpace";

    //Tag da Imagem.
    let picturePlace = document.createElement("img");
    picturePlace.id = "pictureSpace";

    /* (DEU ERRO)

    //Acessando a Biblioteca FileReader.
    let reader = new FileReader();

    //Capturo a URL da imagem salva no Session Storage.
    reader.readAsDataURL(sessionStorage.getItem("pictureValue"));

    //Ao terminar de carregar essa ação, eu pego o resultado dela.
    //Depois passo para o Atributo "SRC" da tag "IMG".
    reader.addEventListener("load", (event) =>{

        picturePlace.src = event.target.result;

    });

    (DEU ERRO) */ 

    //Passando o SRC da imagem do Session Storage para a tag IMG.
    picturePlace.src = sessionStorage.getItem("pictureSource");

    //Passo a imagem para dentro da célula.

    pictureCell.appendChild(picturePlace);

    //E por final adiciono ela na Tabela.
    elementTr.appendChild(pictureCell);

/* -------------------------------------------------------------------------- */
    //Configuração dos botões.

    editButton.addEventListener("click", (event) =>{

        modalDiv.style.display = "block";
        contactsTbody.removeChild(elementTr);
    
    });
    
    deleteButton.addEventListener("click", (event) =>{
    
        contactsTbody.removeChild(elementTr);
    
    });

    //Adicionando os botões na célula.
    buttonsCell.appendChild(editButton);
    buttonsCell.appendChild(deleteButton);

    //Testando os valores do Cachê.
    /*
    console.log(nameCell.textContent);
    console.log(emailCell.textContent);
    console.log(phoneCell.textContent);
    */

    //Adicionando as células à tabela.
    elementTr.appendChild(nameCell);
    elementTr.appendChild(emailCell);
    elementTr.appendChild(phoneCell);
    elementTr.appendChild(buttonsCell);

    //Adicionando a Tr na tabela.
    contactsTbody.appendChild(elementTr);

}

/*
function teste() {

    console.log(localStorage.getItem("valueName"));
    console.log(localStorage.getItem("emailValue"));
    console.log(localStorage.getItem("phoneValue"));

}
*/