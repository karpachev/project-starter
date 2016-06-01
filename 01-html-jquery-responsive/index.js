var express = require("express");
var app = express();
var fs = require("fs");
var path = require("path");
var compression = require('compression');
var passport = require("passport"),
	LocalStrategy = require('passport-local').Strategy;

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session')



app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: 'keyboard cat'
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
  	console.log(username,password);
  	return done(null, {id:username,age:18});
  	return done(err);
  	return done(null, false, { message: 'Incorrect username.' });
  	return done(null, false, { message: 'Incorrect password.' });
  }
));
// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    cb(null, {id:id});
});

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

app.post('/login',
	function(req,res,next) {
		console.log("POST /login");
		next();
	},
	passport.authenticate('local', { successRedirect: '/',
	                                   failureRedirect: '/login'
	                                 	 }),
	function(req, res) {
	    // If this function gets called, authentication was successful.
	    // `req.user` contains the authenticated user.
	    console.log("POST1 /login");
	    //res.redirect('/users/' + req.user.username);
	}
);

app.use( express.static("public", { maxAge: 31557600000 }) );

app.listen(80, function(){
	console.log("Listening for static files");
})