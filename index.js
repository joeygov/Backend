const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3736;

// Imports routes 
const movie = require('./routes/movie.route'); 
const artist = require('./routes/artist.route'); 

// initialize our express app
const app = express();


// Set up default mongoose connection
let db_url = 'mongodb://127.0.0.1/movie-lib-exo';
mongoose.connect(db_url, { useNewUrlParser: true });
// Get the default connection
var db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// Parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
       next();
});

app.use('/api/movies', movie);
app.use('/api/artists', artist);


app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});