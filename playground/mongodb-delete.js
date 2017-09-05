const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('unable to connect to mongodb server');
	}
	console.log('connected to mongodb server');

	//deleteMany
	// db.collection('Todos').deleteMany({text: 'do something'}).then( (result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').deleteMany({name: 'Andrew'});

	//deleteOne
	// db.collection('Todos').deleteOne({text: 'Something to do'}).then( (result) => {
	// 	console.log(result);
	// });

	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed:false}).then( (result) => {
	// 	console.log(result);
	// })

	// db.collection('Users').findOneAndDelete({_id: new ObjectID('someId')}).then((result) => {
	// 	console.log(result);
	// });

	// db.close();
});