// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('unable to connect to mongodb server');
	}
	console.log('connected to mongodb server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed:false
	// },(err, result) => {
	// 	if (err) {
	// 		return console.log('unable to insert todo');
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name:'Oskari',
	// 	age:'28',
	// 	location:'Finland'
	// },(err,result) => {
	// 	if (err) {
	// 		return console.log('unable to insert user'); 
	// 	}

	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
	// })

	db.close();
});