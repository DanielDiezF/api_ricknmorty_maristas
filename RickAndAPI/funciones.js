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

	let byId = false;
	if (filtro === 'id'){
		byId = true;
	}

	return collection.findOne({"query": query})
	.then(function(res) {
		if(res){
			console.log('Algo')
			return res.datos;
		}else{
			console.log('Nada')
			return consultApi(query, byId)
		}
	})
}

function consultApi(query, byId) {
	return axios.get(query)
	.then(function(res){
		if(byId) {
			almacenarQuery(query, res.data);
			return res.data;
		}
		almacenarQuery(query, res.data.results);
		return res.data.results;
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
	collection.insertOne({"query":query, "datos":datos});
}