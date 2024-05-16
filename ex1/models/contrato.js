var mongoose = require('mongoose')

var contratoSchema = new mongoose.Schema({
	// id???
	idcontrato: Number,
	nAnuncio: String,
	tipoprocedimento: String,
	objectoContrato: String,
	dataPublicacao: String,
	dataCelebracaoContrato: String,
	precoContratual: Number,
	prazoExecucao: Number,
	NIPC_entidade_comunicante: Number,
	entidade_comunicante: String,
	fundamentacao: String
}, {versionKey: false,}) // collection: 'contratos'})

module.exports = mongoose.model('contratos', contratoSchema, 'contratos')
