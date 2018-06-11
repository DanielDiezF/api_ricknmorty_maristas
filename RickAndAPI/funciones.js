var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var axios = require('axios');
var dburl = "mongodb://localhost:27017/";
var api = require('./urls.json');

var dbo;
var collection;
var query;

MongoClient.connect(dburl, { useNewUrlParser: true }).then(function(db) {
	dbo = db.db("rickapi");
	collection = dbo.collection("queries");
});

function checkDB(tipo, filtro, termino) {
	query = generarQuery(api[tipo], filtro, termino);
	let myQuery = `/${tipo}/${filtro}/${termino}`;
	console.log(myQuery);

	let byId = false;
	if (filtro === 'id'){
		byId = true;
	}

	return buscarDB(myQuery, byId);
	// return collection.findOne({"query": myQuery})
	// .then(function(res) {
	// 	if(res){
	// 		console.log(res);
	// 		return res;
	// 	}else{
	// 		console.log('Nada')
	// 		return consultApi(query, byId, myQuery);
	// 	}
	// })
}

function consultApi(query, byId, myQuery) {
	return axios.get(query)
	.then(function(res){
		if(byId) {
			let datos = {info: {count: 1, pages: 1}, results: [res.data]};
			almacenarQuery(myQuery, datos);
			return buscarDB(myQuery, byId);
		}
		almacenarQuery(myQuery, res.data);
		console.log(res.data);
		return buscarDB(myQuery, byId);
	})
	.catch(function(err) {
		console.log(err);
	})
}

module.exports = {
	checkDB
}

function generarQuery(url, filtro, termino) {
	if(filtro === 'id') {
		return url+termino;
	}
	return url+'?'+filtro+'='+termino;
}

function almacenarQuery(query, datos) {
	collection.insertOne({"query":query, "data":datos});
}

function buscarDB (myQuery, byId){
	return collection.findOne({"query": myQuery})
	.then(function(res) {
		if(res){
			console.log(res);
			return res;
		}else{
			console.log('Nada')
			return consultApi(query, byId, myQuery);
		}
	})
}