const mongoose = require('mongoose');
const keys = require('./keys');

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose
  .connect('mongodb+srv://marcus:Marcos@1988@cluster0-ckr1k.mongodb.net/test?retryWrites=true&w=majority' 
  ,{useNewUrlParser: true})
  
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));