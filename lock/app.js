const admin = require("firebase-admin");
const config = require("./config");
const Client = require('node-rest-client').Client;

var client = new Client();



admin.initializeApp(config);

var db = admin.database();
var get_url = "http://localhost:8080/status";


db.ref('/automation/room a').on("value", function(snapshot) {
    var val = snapshot.val().value;
    console.log("Room A:", val);


    var req = client.get(get_url+ "/" + val + "/a", function (data, response) {});

    req.on('error', function (err) {
        console.log('request error reaching PI');
    });

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});


db.ref('/automation/room b').on("value", function(snapshot) {
    var val = snapshot.val().value;
    console.log("Room B:", val);


    var req = client.get(get_url + "/" + val + "/b", function (data, response) {});

    req.on('error', function (err) {
        console.log('request error reaching PI');
    });

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});




