var botao = document.querySelector('#insere');
var botao2 = document.querySelector('#inserePessoa');

botao.addEventListener('click', insere);
botao2.addEventListener('click', inserePessoa);

var numeros = [];
var pessoas = [];

function insere(e){
    
    e.preventDefault();
    var numero = document.querySelector("#numero").value;
    numeros.push(numero);
    console.log(numeros);
    numero.innerHTML = " ";
}

function inserePessoa(e){
    e.preventDefault();
    console.log("chamou a função");
    var nome = document.querySelector('#nome').value;
    var endereco = document.querySelector("#endereco").value; 
    var pessoa = {
         nome: nome,
         endereco: endereco
    }        

    var elementoPai = document.body;
    var paragrafoNovo = document.createElement('p');
    var texto = document.createTextNode(pessoa.nome);
    paragrafoNovo.appendChild(texto);
    elementoPai.appendChild(paragrafoNovo);
   
    
}


    
    
    





