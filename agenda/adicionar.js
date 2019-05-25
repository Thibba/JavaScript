var botao = document.querySelector("#btn_novo_contato");

var agenda = [];
var contrato


botao.addEventListener("click", function(event) {
	event.preventDefault();


	var nome = document.querySelector("#input_nome");
	var telefone = document.querySelector("#input_telefone");
	var informacoes = document.querySelector("#input_informacoes");

	var contato = new Object();
	

	var novoContato = "<tr id='contato'>" +
		"<td id='td_nome'>" + nome.value + "</td>" +
		"<td id='td_telefone'>" + telefone.value + "</td>" +
		"<td id='td_informacoes'>" + informacoes.value + "</td>" +
		"</tr>";

	var tabela = document.querySelector("tbody");

	tabela.innerHTML = tabela.innerHTML + novoContato;

	nome.value = "";
	telefone.value = "";
	informacoes.value = "";
});
