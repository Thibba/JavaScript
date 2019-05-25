class ContatosView {

	constructor(elemento){
		this._elemento = elemento;
	}

	update(model) {
		this._elemento.innerHTML = this._template(model);
	}

	_template(model) {
		return `
		<table class="table table-striped table-hover table-bordered">
			<thead>
				<tr>
					<th>Nome</th>
					<th>Telefone</th>
					<th>Informações</th>
				</tr>
			</thead>
			<tbody>
				${model.contatos.map((contato) => {
					return `
						<tr>
							<td> ${contato.nome} </td>
							<td> ${contato.telefone} </td>
							<td> ${contato.informacoes} </td>
						</tr>
					`
				}).join('')}
			</tbody>
		</table>`;

	}

}
