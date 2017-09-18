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
    //console.log(snapshot.val());
    res.render('index', { title:"alarms"});
    
  }, function(error){
    //console.log("Error: " + error.code);
  });
  
});

router.get('/testAction', function(req, res, next){
  // var alarmTime = req.query.time;
  // console.log(alarmTime);
  // firebase.database().ref('alarms/').set(alarmTime);
  
  // res.send(snapshot.val()["alarms"]);

  firebase.database().ref().on("value", function(snapshot){
    console.log(typeof(snapshot.val()));
    res.send(snapshot.val()["alarms"]);
    
  })

});

router.get("/newAlarm", function(req, res, next){
  var hour = req.query.hour;
  var minute = req.query.minute;
  var time = (hour + ":" + minute);
  firebase.database().ref('alarms/').set(time);
  console.log(hour + ":" + minute);
})
module.exports = router;