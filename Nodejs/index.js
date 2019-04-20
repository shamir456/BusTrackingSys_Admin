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


var serviceAccount = require("./servicekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bus-tracker-e4ddd.firebaseio.com",
});



var db = admin.database();
var ref = db.ref("/admins");

app.get('/', (req, res) => {
  
  // ref.once("value", function(snapshot) {
  //   console.log(snapshot.val());
  // });
  res.render('home.ejs')
  
});
app.listen(8080, () => {
  console.log('Example app listening on port 8070!');
});
