const mongoose = require('mongoose');
const { Schema } = mongoose;

//user Schema
const userSchema = new Schema({
  googleId: String
});
//users is the collection
mongoose.model('users', userSchema );
