var express = require('express');
var axios = require('axios')
var router = express.Router();

router.get('/', function(req, res, next) {
	axios.get('http://127.0.0.1:16000/contratos')
	.then( (dados) => {
		res.render('contratos', { title: 'Lista de contratos', contratos: dados.data });
	}).catch( (erro) => {
		res.render("error", { error: erro })
	})
});

router.get('/entidades/:nipc', function(req, res, next) {
	nipc = req.params.nipc
	axios.get('http://127.0.0.1:16000/contratos?entidade=' + nipc)
	.then( (dados) => {
		res.render('contratos', { title: 'Lista de entidades: ' + nipc, contratos: dados.data });
	}).catch( (erro) => {
		res.render("error", { error: erro })
	})
});


router.get('/:id', function(req, res, next) {
	// id = req.params.id
	// if (id.startsWith("entidades")) {
	// 	const parts = string.split('/');
	// 	const numberString = parts[1];
	// 	const nipc = parseInt(numberString);
	// 	axios.get('http://127.0.0.1:16000/contratos?entidade=' + nipc)
	// 	.then( (dados) => {
	// 		res.render('contratos', { title: 'Lista de entidades: ' + nipc, contratos: dados.data });
	// 	}).catch( (erro) => {
	// 		res.render("error", { error: erro })
	// 	})
	// } else {
		axios.get('http://127.0.0.1:16000/contratos/' + id)
		.then( (dados) => {
			res.render('contratoDetalhe', { title: 'Lista de contratos: ' + id, contrato: dados.data[0] });
		}).catch( (erro) => {
			res.render("error", { error: erro })
		})
	// }
});

module.exports = router;
