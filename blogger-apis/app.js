'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

var mongoose = require ('mongoose'  );
var url = 'mongodb://localhost:27017/meanstackblogger';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open', function (){console.log("Connected correctly to server");});


SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);
/*
  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }*/
});
