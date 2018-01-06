// tasks.js
var express = require('express');
var router = express.Router();
var NodeCouchDb = require('node-couchdb');

const couch = new NodeCouchDb({
 	auth: {
 		user:'mansari',
 		password: 'Haroun1!'
 	}
});

const dbName = 'haroundb';
const friendsViewURL = '_design/friends/_view/all_friends'; 
const squadquizViewURL = '_design/quizzes/_view/all_quiz';


router.get('/friends', function(req, res, next){
	couch.get(dbName, friendsViewURL).then(function(data, status, headers){
		res.json(data);
	}).catch(function(err){
		res.send(err);
	});
});

router.get('/squadquiz', function(req, res, next){
	couch.get(dbName, squadquizViewURL, {
		"key": "Which Squad Member Are You?"
	}).then(function(data, status, headers){
		res.json(data);
	}).catch(function(err){
		res.send(err);
	});
});

module.exports = router;