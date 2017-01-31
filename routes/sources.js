var express = require('express');
var router = express.Router();
const Guidebox = require('../requests/sourceCalls.js');

// Gets all sources on web
router.get('/', function(req,res){
  Guidebox.getWebSources()
    .then(response => res.json(response));
})



module.exports = router;
