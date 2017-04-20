var express = require('express');
var router = express.Router();
const Guidebox = require('../requests/tvCalls.js');



/* GET home page. */
router.get('/free', function(req, res) {
    Guidebox.getFreeTv()
                .then((response) => res.json(response));

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
