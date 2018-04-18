const admin = require("firebase-admin");
const config = require("./config");

admin.initializeApp(config);

var db = admin.database();

db.ref('/automation/room a').on("value", function(snapshot) {
    console.log("Room A");
    console.log(snapshot.val());
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});


db.ref('/automation/room b').on("value", function(snapshot) {
    console.log("Room B");
    console.log(snapshot.val());
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});




