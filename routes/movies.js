var express = require('express');
var router = express.Router();
const Guidebox = require('../requests/movieCalls.js');


/* GET users listing. */
router.get('/', function(req, res) {
  Guidebox.getFreeMovies()
    .then((response) => res.json(response));
});
router.get('/search/:movieTitle',function(req,res){
	Guidebox.searchMovies(req.params.movieTitle)
		.then(response => res.json(response));
});
router.get('/:id', function(req, res){
  Guidebox.getSpecificMovie(req.params.id)
    .then((response) => res.json(response));
});



module.exports = router;
