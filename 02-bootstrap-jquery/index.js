var express = require("express");
var app = express();
var compression = require('compression');
var passport = require("passport"),
	LocalStrategy = require('passport-local').Strategy;

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session')



// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(compression());

app.get("/", function(req,res) {
	res.render('index', {title:"Home"});
});


app.use( express.static("public", { maxAge: 31557600000 }) );

app.listen(80, function(){
	console.log("Listening for static files");
})