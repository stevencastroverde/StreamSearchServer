var express = require('express');
var router = express.Router();
const Guidebox = require('../requests/movieCalls.js');
const client = require('../app').client;




/* GET users listing. */
router.get('/free', function(req, res) {
    client.get('/movies/free', function (error, freeMovies) {
        if(freeMovies){
            res.json(JSON.parse(freeMovies));
        } else {
            Guidebox.getFreeMovies()
                .then((response) =>{
                res.json(response);
                client.set('/movies/free', JSON.stringify(response.results), function (error) {
                    if(error){throw error};
                })
            })
        }

    })
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
