var botao = document.querySelector("#btn_novo_contato");
// var botaoAlterar = document.querySelector("#btn_alterar");
var botaoExcluir = document.querySelector("btn_excluir");
var contato = new Object();
var contatos = [];

var botaoAlterar = document.getElementById("#btn_excluir");

botao.addEventListener("click", function (event) {
    event.preventDefault();
    
    var nome = document.querySelector("#input_nome");
    var telefone = document.querySelector("#input_telefone");
    var informacoes = document.querySelector("#input_informacoes");    
    
    contato = adicionar(nome.value, telefone.value, informacoes.value);
    contatos.forEach(function (item, indice, array) {
        console.log("Teste de Array");
        console.log(item, indice);
    });
    
    var tabela = document.querySelector("tbody");    
        
    var novoContato = "<tr id='contato'>" +
        "<td id='td_id'>" + contato.id + "</td>" +
        "<td id='td_nome'>" + contato.nome + "</td>" +
        "<td id='td_telefone'>" + contato.telefone + "</td>" +
        "<td id='td_informacoes'>" + contato.informacoes + "</td>" +
        "<td id='td_excluir'>" + "<button type='submit' class='btn btn-primary' id='btn_alterar'>Alterar</button>" + "</td>" + 
        "<td id='td_excluir'>" + "<button type='submit' class='btn btn-primary' id='btn_excluir'>Excluir</button>" + 
        "</tr>";

    tabela.innerHTML = tabela.innerHTML + novoContato;
    
    nome.value = "";
    telefone.value = "";
    informacoes.value = "";

});

function adicionar(nome, telefone, informacoes) {

    var contato = new Object();
    contato.nome = nome;
    contato.telefone = telefone;
    contato.informacoes = informacoes;
    contato.id = contatos.push(contato);        
    
    return contato;

};

