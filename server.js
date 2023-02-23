var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var indexRouter = require('./app/routes/index');
var app = express();

// view path and engine 
app.set('views',path.join(__dirname,'app/views'));
app.set('view engine', 'ejs');

// set public folder 
app.use(express.static(__dirname + '/public'));

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', function (req, res) {
//     res.render('auth/login');
//  })
app.use('/', indexRouter);
 
 var server = app.listen(8089, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at localhost", host, port)
 })