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
    username: "name",
    email: "email",
    profile_picture : "imageUrl"
  });

  res.render('index', { title: 'Kill me pls' });

});

module.exports = router;
