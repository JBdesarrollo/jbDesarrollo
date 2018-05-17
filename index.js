var express = require('express');
var app = express();

// get an instance of router
var router = express.Router();

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
    res.send('Winter is coming!!!');
});

// Experimento para pasar un json desde mi servidor nodejs
router.get('/info', function(req, res) {
    res.json({"nombre": "Jhon Barcasnegras",
              "telef" : "3202794967",
              "email" : "jhonbarc1978@outlook.com"});
});

// apply the routes to our application
app.use('/', router);
var port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log('Winter is coming!!! ' + port + '!');
});

