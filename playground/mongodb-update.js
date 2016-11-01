// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDb Server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('581895f83396ebbfb4a65b52')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.close();
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5817cf4701bb787ddd03ab1f')
  }, {
    $set: {
      name: 'Theguy'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })
});
