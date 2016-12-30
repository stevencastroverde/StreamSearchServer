var express = require('express');
var router = express.Router();
var request = require('request')


/* GET users listing. */
router.get('/search', function(req, res, next) {
    console.log('request got')
    console.log(req.query);
     request('https://api-public.guidebox.com/v1.43/US/rKcE8UjpWG7r8hIkG3Dus9HltJxmoYxp/search/movie/title/'+ req.query.title,function(error,response,body){
     res.send(body)
 })

});

module.exports = router;
