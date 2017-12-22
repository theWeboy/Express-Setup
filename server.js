var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set path for static files
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/',function (req,res) {
   res.send('Express App');
});

app.listen(3000, function () {
    console.log('Server running on port 3000...')
});