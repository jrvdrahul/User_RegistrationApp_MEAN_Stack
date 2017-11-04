/**
 * Created by rahul on 11-06-2016.
 */
var express=require('express');
var body=require('body-parser');
var mongoose = require('mongoose');
var fs=require('fs');

mongoose.connect("mongodb://localhost/register");
mongoose.connection.on('error', function() {
    console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});

var app = express();

app.use(body.json());
app.use(body.urlencoded({extended: true}));

var model_files, model_loc;
app.models = {};
model_loc = __dirname + '/app/models';
model_files = fs.readdirSync(model_loc);
model_files.forEach(function (file) {
    return (require(model_loc + '/' + file)).boot(app);
});


// routes ======================================================================
var controller_loc = __dirname + '/app/controller';
var controller_files = fs.readdirSync(controller_loc);
//load all files inside controllers.
controller_files.forEach(function (file) {
    return (require(controller_loc + '/' + file))(app);
});


app.use(express.static(__dirname + '/public'));

app.listen(5000);
/**
 * Created by rahul on 21-06-2016.
 */
