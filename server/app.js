'use strict';

// Simple express server
var express = require('express');
var path = require('path');
var app = express();

const appRoot = path.normalize(path.join(__dirname, '/..'));
console.log('appRoot : ' + appRoot);

//Allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Refer bundled aurelia scripts
app.use("/scripts", express.static(path.join(appRoot, 'scripts')));

//Start Aurelia's index.html
app.get('/', function(req, res) {
    res.sendFile('index.html', { root: appRoot });
});

//APIs
app.get('/api', function(req, res) {
    res.send("<h1>Welcome to Express API.</h1>");
});

app.get('/api/users', function(req, res) {
    let users = [
        { 'Id': 1, 'Name': 'Ajay Jadhav', 'Email': 'jadhavajay@gmail.com' },
        { 'Id': 2, 'Name': 'Vijay Chavan', 'Email': 'vijay@gmail.com' },
        { 'Id': 3, 'Name': 'Sanjay Jha', 'Email': 'sanjay@gmail.com' },
        { 'Id': 4, 'Name': 'Rajan Sharma', 'Email': 'rajan@gmail.com' },
    ];

    res.send(users);
});

app.listen(3000);
