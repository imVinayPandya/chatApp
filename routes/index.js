var express = require('express');
var router = express.Router();
var chatIO = require('./../controllers/chatIO');
var io = require('./../controllers/globalInstances').globalInstances();

/* GET home page. */
router.get('/', function(req, res, next) {
    chatIO(io);
    res.render('index', { title: 'Chat App' });
});



//console.log('console is working.............');
//console.log(io);

module.exports = router;