var express = require('express');
var router = express.Router();
var util = require('util');

/* GET Index page. */
router.get('/', function(req, res, next) {
    res.render('page', {
        body: "Hello! Welcome to your generated page!",
    });
});


module.exports = router;
