const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove()

// Todo.remove({}).then((result) => {
//   console.log(result);
// })
Todo.findByIdAndRemove('581a5fd1e357ed581193d09c').then((todo) => {
console.log(todo);
});

// findOneAndRemove
