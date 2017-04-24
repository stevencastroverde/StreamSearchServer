var express = require('express');
var router = express.Router();
const Guidebox = require('../requests/tvCalls.js');



/* GET home page. */
router.get('/free', function(req, res) {
    Guidebox.getFreeTv()
        .then((response) => {
        res.json(response)
    });
});

router.get('/search/:searchTerm', function(req,res){
  Guidebox.searchShows(req.params.searchTerm)
    .then((response) => res.json(response));
});
router.get('/sources', function(req, res){
  Guidebox.getSources()
      .then((response) => res.json(response));
});
router.get('/:id/:subscriptions', function(req, res){
	var show = req.params.id
	var subscriptions = req.params.subscriptions
  Promise.all([Guidebox.getSpecificShow(show), Guidebox.getEpisodes(show, subscriptions), Guidebox.getShowImages(show),Guidebox.getRelatedShows(show)])
	.then(results => res.json(results))
	.catch(e => res.json(e));
});



module.exports = router;
