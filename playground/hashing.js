const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//--bcryptjs--
// var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
// 	bcrypt.hash(password, salt, (err, hash) => {
// 		console.log(hash);
// 	});
// });

// var hashedPassword = '$2a$10$8EwBpLA2THR/160LOJ8Z8eajt7Fqvh3rO5wSiJeu97Mn9VNMJKIp6';

// bcrypt.compare(password, hashedPassword, (err, res) => {
// 	console.log(res);
// });

//--jwt--

// var data = {
// 	id: 10
// }

// var token = jwt.sign(data, '123asd');
// console.log(token);

// var decoded = jwt.verify(token, '123asd');
// console.log('decoded', decoded);

//--crypto-js--

// var message = 'I am user nr. 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`hash: ${hash}`);

// var data = {
// 	id: 4
// }

// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
// 	console.log('data was not changed.');
// } else {
// 	console.log('data was changed!');

// }
