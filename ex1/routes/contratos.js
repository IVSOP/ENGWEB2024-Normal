var express = require('express');
var router = express.Router();
var Contrato = require("../controllers/contrato")

router.get('/', function(req, res, next) {

	if (req.query.hasOwnProperty('entidade')){
		Contrato.listEntidade(req.query.entidade)
		.then(data => {
			res.jsonp(data)
		})
		.catch(erro => {
			res.jsonp(erro)
		})
	}
	else if (req.query.hasOwnProperty('tipo')){
		Contrato.listTipo(req.query.tipo)
		.then(data => {
			res.jsonp(data)
		})
		.catch(erro => {
			res.jsonp(erro)
		})
	}
	else {
		Contrato.list()
		.then(data => {
			res.jsonp(data)
		})
		.catch(erro => {
			res.jsonp(erro)
		})
	}
});

router.get('/:id', function(req, res, next) {
	Contrato.find(req.params.id)
	.then(data => {
		res.jsonp(data)
	})
	.catch(erro => {
		res.jsonp(erro)
	})
});

router.get('/entidades', function(req, res, next) {
	Contrato.listEntidades()
	.then(data => {
		res.jsonp(data)
	})
	.catch(erro => {
		res.jsonp(erro)
	})
});

router.get('/tipos', function(req, res, next) {
	Contrato.listTipos()
	.then(data => {
		res.jsonp(data)
	})
	.catch(erro => {
		res.jsonp(erro)
	})
});

router.post('/', function(req, res, next) {
	// console.log(req.body)
	Contrato.insert(req.body)
	.then(data => {
		res.jsonp(data)
	})
	.catch(erro => {
		res.jsonp(erro)
	})
});

router.put('/:if', function(req, res, next) {
	Contrato.update(req.params.if, req.body)
	.then(data => {
		res.jsonp(data)
	})
	.catch(erro => {
		res.jsonp(erro)
	})
})

router.delete('/:id', function(req, res, next) {
	Contrato.delete(req.params.id)
	.then(data => {
		res.jsonp(data)
	})
	.catch(erro => {
		res.jsonp(erro)
	})
})

module.exports = router;
