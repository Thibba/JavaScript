class ListaContatos {

	constructor() {
		this._contatos = [];
	}

	adiciona(contato) {
		this._contatos.push(contato);
	}

	get contatos() {
		return this._contatos;
	}

}
