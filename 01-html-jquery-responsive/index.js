var express = require("express");
var app = express();
var fs = require("fs");
var path = require("path");
var compression = require('compression');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(compression());

app.get("/", function(req,res) {
	res.render('index', {title:"Home"});
});
app.get("/about", function(req,res) {
	res.render('about', {title:"About"});
});
app.get("/help", function(req,res) {
	res.render('help', {title:"Help"});
});
app.get("/login", function(req,res) {
	res.render('login', {title:"Login"});
});

app.use( express.static("public", { maxAge: 31557600000 }) );

app.listen(80, function(){
	console.log("Listening for static files");
})