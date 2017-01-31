var express = require('express');
var router = express.Router();
const Guidebox = require('../requests/sourceCalls.js');

// Gets all sources
router.get('/', function(req,res){
  Guidebox.getAllSources()
    .then(response => res.json(response));
})



module.exports = router;
