const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59b9704a7a2497be21b80666';

// if (!ObjectId.isValid(id)) {
// 	console.log('Id not valid');
// }

// Todo.find({
// 	_id: id
// }).then( (todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 		_id: id
// }).then( (todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then( (todo) => {
// 	if (!todo) {
// 		return console.log('id not found');
// 	}
// 	console.log('Todo by id: ', todo);
// }).catch( (e) => console.log(e));

User.findById('59b7fd608396d3b9bf845fee').then( (user) => {
	if (!user) {
		return console.log('user not found');
	}
	console.log('user by id: ',JSON.stringify(user,undefined,2));
}).catch( (e) => {
	console.log(e);
})