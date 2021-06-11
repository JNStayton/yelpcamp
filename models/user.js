const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

//automatically adds in unique username and password requirements
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);