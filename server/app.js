'use strict';

// simple express server
var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();

const appRoot = path.normalize(path.join(__dirname, '/..'));
console.log('appRoot : ' + appRoot);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/scripts", express.static(path.join(appRoot, 'scripts')));
app.get('/', function(req, res) {
    res.sendFile('index.html', { root: appRoot });
});

app.get('/users', function(req, res) {
    var users = [
        { 'Id': 1, 'Name': 'Ajay Jadhav', 'Email': 'jadhavajay@gmail.com' },
        { 'Id': 2, 'Name': 'Vijay Chavan', 'Email': 'vijay@gmail.com' },
        { 'Id': 3, 'Name': 'Sanjay Jha', 'Email': 'sanjay@gmail.com' },
        { 'Id': 4, 'Name': 'Rajan Sharma', 'Email': 'rajan@gmail.com' },
    ];

    //console.log("users: " + JSON.stringify(users));
    res.send(users);
});

app.listen(3000);
