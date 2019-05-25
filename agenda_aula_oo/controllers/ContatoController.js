class ContatoController {

	constructor() {
		let $ = document.querySelector.bind(document);

        this._inputNome = $('#input_nome');
        this._inputTelefone = $('#input_telefone');
        this._inputInformacoes = $('#input_informacoes');

        this._listaContatos = new ListaContatos();
        this._contatosView = new ContatosView($('#contatosView'));
        this._contatosView.update(this._listaContatos);
	}

	adicionaContato(event){
		event.preventDefault();

		let contato = new Contato(
			this._inputNome.value,
			this._inputTelefone.value,
			this._inputInformacoes.value
		);

		this._listaContatos.adiciona(contato);
		this._contatosView.update(this._listaContatos);

		this._limpaForm();
	}

	_limpaForm() {
		this._inputNome.value = '';
		this._inputTelefone.value = '';
		this._inputInformacoes.value = '';

		this._inputNome.focus();

	}

}
