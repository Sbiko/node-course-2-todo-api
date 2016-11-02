const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');
// var id = '58192b0976f63b8714d489ed';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//       return console.log('Id not found');
//   }
//   console.log('Todo By id', todo);
// }).catch((e) => console.log(e));

var id = '6818bdcd189ef67842bc3d54';

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log('User found', user);
}).catch((e) => {
  console.log(e);
});
