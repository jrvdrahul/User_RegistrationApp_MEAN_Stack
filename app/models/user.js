var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: { type: String },
    name: {type: String },
    mobileNo: { type: String },
    image:{ type: String},
    bibNo:{ type:String}
});

exports.UserSchema = module.exports.UserSchema = userSchema;
exports.boot = module.exports.boot = function (app) {
    mongoose.model('User', userSchema);
    return app.models.User = mongoose.model('User');
};