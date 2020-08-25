"use strict";

var path = require('path');

var express = require('express');

var app = express();
var publicPath = path.join(__dirname, '..', 'public');
var port = process.env.PORT || 3000;
app.use(express["static"](publicPath));
app.get('*', function (req, res) {
  res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, function () {
  console.log('Server is up!');
});