class Contato {

	constructor(nome, telefone, informacoes) {
		this._nome = nome;
		this._telefone = telefone;
		this._informacoes = informacoes;
	}

	get telefone() {
		return this._telefone;
	}

	get nome() {
		return this._nome;
	}

	get informacoes() {
		return this._informacoes;
	}

}





