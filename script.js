//* validando formulario*//
var contenido = document.querySelector("#api");
fetch("https://api.github.com/users/angelo-arboleda")
  .then(function (response) {
    return response.json();
  })

const formulario = document.getElementById("formulario")
const submit = document.getElementById("enviar");
var input = document.getElementById("input");
var inputemail = document.getElementById("email-box");
var nomebox = document.getElementById("nome-box");
var telbox = document.getElementById("tel-box");

function validateemail (e){
var email = e.target.value;
console.log(email);
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if(emailRegex.test(email))
  {
    inputemail.style.borderColor = "green"

  }
else{
    inputemail.style.borderColor = "red" 
}
}

function validatenome (e){
    var nome = e.target.value;
    console.log(nome);
    const nomeRegex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/ ;

    if(nomeRegex.test(nome))
    {
        nomebox.style.borderColor = "green"
    }
    else{
        nomebox.style.borderColor = "red"
    }
}

function validatetel (e){
    var tel = e.target.value;
    console.log(tel);
    const telRegex =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if(telRegex.test(tel))
    {
        telbox.style.borderColor = "green"
    }
    else{
        telbox.style.borderColor = "red"
    }
    }
    function handlesubmit(e) { 
      e.preventDefault();
      alert("Mensagem enviada com sucesso")
      console.log("click");
      contato.reset();
      
    };
    

inputemail.addEventListener("input", validateemail);
nomebox.addEventListener("input", validatenome);
telbox.addEventListener("input", validatetel);
enviar.addEventListener("click", handlesubmit);