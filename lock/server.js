var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080;
var router = express.Router();

app.get('/status/:state/:door', function (req, res) {
    console.log(req.params.state);
    console.log(req.params.door);


    res.send("Success");
});

app.listen(port);
console.log('use port: ' + port);
