const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('unable to connect to mongodb server');
	}
	console.log('connected to mongodb server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('59aeed24ec25b1287a00896a')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// },{
	// 	returnOriginal: false
	// }).then( (result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').findOneAndUpdate({
	// 	_id: new ObjectID('59ad63ae498a358ff8a5b04a')
	// }, {
	// 	$inc: {
	// 		age: 1
	// 	},
	// 	$set: {
	// 		name: 'Oskari'
	// 	}
	// },{
	// 	returnOriginal: false
	// }).then( (result) => {
	// 	console.log(result);
	// });

	// db.close();
});