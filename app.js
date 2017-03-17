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


var redirect = require("express-redirect");
var bcrypt = require('bcrypt');
const saltRounds = 10;


 
var PORT = process.env.NODE_ENV || 3000;

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, 'public')))

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
redirect(app);
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

// DEPLOY TEST LIVE//
var sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     5432,
      host:     'ec2-54-243-190-37.compute-1.amazonaws.com',
      logging:  true //false
    })


// ACTUAL SITE LIVE//
// var sequelize = new Sequelize(process.env.DATABASE_URL, {
//       dialect:  'postgres',
//       protocol: 'postgres',
//       port:     5432,
//       host:     'ec2-54-243-58-188.compute-1.amazonaws.com',
//       logging:  true //false
//     })











//LOCAL SITE //

// var sequelize = new Sequelize('myKlovrUsers', 'root', "root")




// var sequelize = new Sequelize('myKlovrUsers','root', 'root');
var Newusers = sequelize.define('auser',{
  id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  first: Sequelize.STRING,
  last: Sequelize.STRING,
  email: Sequelize.STRING
})

Newusers.sync();

var Investors = sequelize.define("investor",{
  id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  username: Sequelize.STRING,
  password: Sequelize.STRING,
})

Investors.sync();

var Sweepstakes = sequelize.define('sweep',{
    id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    email: Sequelize.STRING,
    name: Sequelize.STRING,
    submittedOn: {type: Sequelize.DATE, defaultValue:Sequelize.NOW}
})

Sweepstakes.sync();








//DELETE THE BELOW SECTION AFTER SETUP//

  app.get("/setpass/:pass", function(req,res){
    console.log('inhere');
    console.log(req.params.pass);
    bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.params.pass, salt, function(err, hash) {

      Investors.findAll({
       where: {username: "invest"}
      }).then(function(investorArray){
              console.log(investorArray);
              if (investorArray.length > 0){
                  Investors.destroy({
                    where: {username: "invest"}
                  })
              }
                Investors.create({
                username: "invest",
                password:hash,
              }).then(function(investor){
                console.log(investor);
              })
      })       
     });
    });
  })

   app.get("/setsite/:pass", function(req,res){
    console.log('inhere');
    console.log(req.params.pass);
    Investors.findAll({
     where: {username: "site"}
    }).then(function(investorArray){
            console.log(investorArray);
            if (investorArray.length > 0){
                Investors.destroy({
                  where: {username: "site"}
                })
            }
              Investors.create({
              username: "site",
              password:req.params.pass,
            }).then(function(investor){
              console.log(investor);
            })
    })       
            
  })

//DELETE THE ABOVE SECTION AFTER SETUP//

  app.post('/invest', function(req,res){
    console.log(req);
        Investors.findOne({
          where:{username:"invest"}
        }).then(function(investorInfo){
          console.log(req.body.investPass);
          console.log(investorInfo.password);
          var passTry = req.body.investPass;
          var hash= investorInfo.password;
          bcrypt.compare(passTry, hash, function(err, res) {
              if(res==true){console.log("true")
                sendAnswer()
                }
              else{console.log("false");}
            });
          function sendAnswer(){
            console.log('insend');
            Investors.findOne({
              where:{username:"site"}
            }).then(function(investorInfo){
              console.log(investorInfo.password);
              var link = investorInfo.password
              sentIt(link)
            })
            function sentIt(link){
              res.send(link)
            } 
          }
        })
  })

  app.get("/investorsroom", function(req,res){
    console.log('get');
    res.sendFile(path.join(__dirname+"/public/views/investor.html"+"/testing"));
      })


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
    console.log('IN SIGNUP');
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