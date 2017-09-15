var express = require('express');
var router = express.Router();
var firebase = require('firebase');




var config = {apiKey: "AIzaSyAZmipv-1ohd8x3K521rwd1Av_d5QELSDA",
    authDomain: "barualarm.firebaseapp.com",
    databaseURL: "https://barualarm.firebaseio.com",
    projectId: "barualarm",
    storageBucket: "barualarm.appspot.com",
    messagingSenderId: "943709348014"
  };
  firebase.initializeApp(config);

var date = Date.now();
//dateJson = date.toJSON()

/* GET home page. */
router.get('/', function(req, res, next) {
  //firebase.database().ref('alarms/').set(dateJson);

  var ref = firebase.database().ref();
  
  ref.on("value", function(snapshot){
    console.log(snapshot.val());
    res.render('index', { title: JSON.stringify(snapshot.val()) });
  }, function(error){
    //console.log("Error: " + error.code);
  });

  
  


  


});

router.get('/testAction', function(req, res, next){
  console.log(req.query.hr)
})
module.exports = router;
