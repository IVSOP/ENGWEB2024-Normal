var Contrato = require('../models/contrato')

module.exports.list = () => {
	return Contrato
		.find()
		// .sort({nome: 1})
		.exec()
}

module.exports.listEntidade = (entidade) => {
	return Contrato
	.find({NIPC_entidade_comunicante : entidade}).exec()
}

module.exports.listTipo = (tipo) => {
	return Contrato
	.find({tipoprocedimento : tipo}).exec()
}


module.exports.listEntidades = () => {
	return Contrato
	.distinct("entidade_comunicante").sort().exec()
}

module.exports.listTipos = () => {
	return Contrato
	.distinct("tipoprocedimento").sort().exec()
}

module.exports.find = _id => {
	return Contrato
	// .findOne({id: _id})
		.find({_id: _id}) // assim devolve lista
		.exec()
	// erro??????
}

module.exports.insert = contrato => {
	if (( Contrato.find( {_id: contrato._id} )
		.exec()).length != 1) // se o id ja existe, nao podemos inserir
	{
		var newContrato = new Contrato(contrato)
		return newContrato.save()
	}
	// else erro???????
}

module.exports.update = (_id, contrato) => {
	if (_id == contrato._id) {
		return Contrato.updateOne({_id: _id}, contrato)
	}
	// erro?????
}

module.exports.delete = (_id) => {
	return Contrato.deleteOne({_id: _id})
	// erro?????
}
