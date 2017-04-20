var express = require('express');
var router = express.Router();
const Guidebox = require('../requests/tvCalls.js');



/* GET home page. */
router.get('/', function(req, res) {
    client.get('/shows/free', function (error, freeTV) {
        if (freeTV) {
            res.json(JSON.parse(freeTV));
        } else {
            Guidebox.getFreeTv()
                .then((response) => {
                res.json(response);
            client.set('/shows/free', JSON.stringify(freeMovies.data), function(error){
                if(error) {
                    throw error;
                } else {
                    client.expire('/shows/free', 24*60*60);
                }});

        });
        }
    })
});
router.get('/search/:searchTerm', function(req,res){
  Guidebox.searchShows(req.params.searchTerm)
    .then((response) => res.json(response));
});
router.get('/sources', function(req, res){
  Guidebox.getSources()
      .then((response) => res.json(response));
});
router.get('/:id', function(req, res){
  Guidebox.getSpecificShow(req.params.id)
    .then((response) => res.json(response));
});
router.get('/:id/episodes', function(req,res){
  Guidebox.getFreeShowEpisodes(req.params.id)
    .then((response) => res.json(response));
});


module.exports = router;
