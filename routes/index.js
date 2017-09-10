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



/* GET home page. */
router.get('/', function(req, res, next) {
  firebase.database().ref('users/').set({
    username: "smg",
    email: "yarubogesh@haHAA.com",
    profile_picture : "nothing"
  });

  
  


  res.render('index', { title: 'Kill me pls' });

  firebase.database().ref('users/').once('value').then(function(snapshot){
    var user = snapshot.val();
    console.log(user);
  }, function(error){
    console.log("Error: " + error.code);
  });

});

module.exports = router;
