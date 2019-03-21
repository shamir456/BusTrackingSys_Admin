const express = require('express')
const app = express();


var admin = require("firebase-admin");

var serviceAccount = require("/home/zen/SE/servicekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bus-tracker-e4ddd.firebaseio.com",
  // databaseAuthVariableOverride: {
  //   uid: "28f06fa6-cbd1-4aa7-96f0-9a51b8a494f7"
  // }
});


var db = admin.database();
var ref = db.ref("/sanif");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

app.get('/', (req, res) => {
  res.send(snapshot.val());
});
app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
