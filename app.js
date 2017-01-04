var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mysql = require('mysql');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var routes = require('./routes/index');
var app = express();

 
var PORT = process.env.NODE_ENV || 3000;

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, 'public')))

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);

var Sequelize = require('sequelize');

// DEPLOY TEST LIVE//
// var pg = require('pg');

// pg.defaults.ssl = true;
// pg.connect(process.env.DATABASE_URL, function(err, client) {
//   if (err) throw err;
//   console.log('Connected to postgres! Getting schemas...');

//   client
//     .query('SELECT table_schema,table_name FROM information_schema.tables;')
//     .on('row', function(row) {
//       console.log(JSON.stringify(row));
//     });
// });

// // DEPLOY TEST LIVE//
// var sequelize = new Sequelize(process.env.DATABASE_URL, {
//       dialect:  'postgres',
//       protocol: 'postgres',
//       port:     5432,
//       host:     'ec2-54-243-190-37.compute-1.amazonaws.com',
//       logging:  true //false
//     })


//ACTUAL SITE LIVE//
// var sequelize = new Sequelize(process.env.DATABASE_URL, {
//       dialect:  'postgres',
//       protocol: 'postgres',
//       port:     5432,
//       host:     'ec2-54-243-58-188.compute-1.amazonaws.com',
//       logging:  true //false
//     })











//LOCAL SITE //

var sequelize = new Sequelize('myKlovrUsers', 'root', "root")




// var sequelize = new Sequelize('myKlovrUsers','root', 'root');
var Newusers = sequelize.define('auser',{
  id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  first: Sequelize.STRING,
  last: Sequelize.STRING,
  email: Sequelize.STRING
})

Newusers.sync();

var Sweepstakes = sequelize.define('sweep',{
    id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    email: Sequelize.STRING,
    name: Sequelize.STRING,
    submittedOn: {type: Sequelize.DATE, defaultValue:Sequelize.NOW}
})


Sweepstakes.sync();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+ '/public/views/index.html'));
});

app.get('/sweepstakes', function(req,res){
  res.sendFile(path.join(__dirname+ '/public/views/sweeps.html'));
})

app.get('/business', function(req,res){
  res.sendFile(path.join(__dirname+ '/public/views/business.html'));
})

app.get('/pricing', function (req, res) {
    res.sendFile(path.join(__dirname+ '/public/views/pricing.html'));
});

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname+ '/public/views/about.html'));
});

app.get('/passes', function (req, res) {
    res.sendFile(path.join(__dirname+ '/public/views/passes.html'));
});


app.post('/signup', function(req, res){
    Newusers.findAll({
    where: {email: req.body.email}
  }).then(function(userArray){
    console.log(userArray);
    if (userArray.length > 0){
    
     console.log("Already have this email")
          // res.json({have:true})
          res.redirect('/')
    }else{
      Newusers.create({
        first: req.body.first,
        last:req.body.last,
        email:req.body.email
      }).then(function(user){

        console.log(user);
        // res.json(user);
        // res.redirect('/')

      })
    }
  })
})

app.post('/sweepstake', function(req, res){
    Sweepstakes.findAll({
    where: {email: req.body.email}
  }).then(function(userArray){
    console.log(userArray);
    if (userArray.length > 0){
    
     console.log("Already have this email")
          res.json({have:true})
          // res.redirect('/sweepstakes')
    }else{
      Sweepstakes.create({
        email:req.body.email,
        name: req.body.name
      }).then(function(user){

        console.log(user);
        // res.json(user);
        res.redirect('/')

      })
    }
  })
})

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});


module.exports = app;