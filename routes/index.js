var express = require('express');
var router = express.Router();
var firebase = require('firebase');
var jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM('../views/index.ejs');
//console.log(dom.window.document.querySelector("p").textContent);

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

  var ref = firebase.database().ref();

  ref.on("value", function(snapshot){
    console.log(snapshot.val());
  }, function(error){
    console.log("Error: " + error.code);
  });

  
  


  res.render('index', { title: 'Kill me pls' });


});

module.exports = router;
