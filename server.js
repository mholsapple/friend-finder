// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Ensures css from the public folder will work
app.use(express.static('app/public'));

// Routes
// =============================================================


require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})