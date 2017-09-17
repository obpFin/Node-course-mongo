const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({})
//Todo.findOneAndRemove()
// Todo.findByIdAndRemove()


// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Todo.findOneAndRemove({_id: '59be3e2d131e8f77da1d6deb'}).then((todo) => {
	console.log(todo); 
})

Todo.findByIdAndRemove('59be3e2d131e8f77da1d6deb').then((todo) => {
	console.log(todo); 
})