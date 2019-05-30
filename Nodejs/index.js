var express = require('express')
var logger= require('morgan')
var admin = require("firebase-admin");
var bodyparser=require('body-parser')

var app = express();


app.set('view engine','ejs')

app.use(express.static('views'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended :false}))
app.use(logger('dev'))
app.set('views',__dirname+'/views')
//app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname+'/views/js'));
//app.use('../Nodejs/views/js', express.static('public'));
// app.use(express.static('public'));
app.use('/static', express.static('public'));
var router = express.Router();
var serviceAccount = require("./servicekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bus-tracker-e4ddd.firebaseio.com",
});



var db = admin.database();
var ref = db.ref("/drivers");

app.get('/', (req, res) => {
  var array=[]
  ref.on("value", function(snapshot) {
    snapshot.forEach(function(data) {
      console.log("The " + data.key + " dinosaur's score is " + data.val().lt  + data.val().lg);
      array.push(data.val())
    });
  });
  res.render('home.ejs',{
    array: array
})
  
});

app.get('/add/user',(req,res) => {
  res.render('add')
});

app.get('/add/driver',(req,res) => {
  res.render('adddriver')
});

app.get('/update/driver',(req,res) => {
  res.render('adddriver')
});
app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});
