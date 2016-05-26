var express = require("express");
var app = express();
var fs = require("fs");
var path = require("path");

// set the view engine to ejs
app.set('view engine', 'ejs');



app.get("/", function(req,res) {
	res.render('index', {title:"Home"});
});
app.get("/about", function(req,res) {
	res.render('about', {title:"About"});
});
app.get("/help", function(req,res) {
	res.render('help', {title:"Help"});
});

app.use( express.static("public") );

app.listen(80, function(){
	console.log("Listening for static files");
})