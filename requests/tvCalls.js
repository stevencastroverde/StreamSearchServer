const dotenv = require('dotenv').config();
const client = require('guidebox');
const apiKey = process.env.API_KEY;
const Guidebox = new client(apiKey, 'US');

module.exports = {
  getFreeTv: function(){
    return Guidebox.shows.list({sources: 'free', platform:'web',include_links:true});
  },
  searchShows: function(searchTerm){
    return Guidebox.search.shows({field:'title', query:searchTerm});
  },
  getSpecificShow: function(showId){
    return Guidebox.shows.retrieve(showId);
  },
  getFreeShowEpisodes: function(showId){
    return Guidebox.shows.episodes(showId, {sources:'free', include_links:true, platform: 'web'});
  },
  getEpisodes: function(showId, subscriptions){
    return Guidebox.shows.episodes(showId, {sources: subscriptions, include_links: true, platform:'web', limit: 250});
  },
  getShowImages: function(showId){
		return Guidebox.shows.images(showId, {filter: 'backgrounds'});
	},
	getRelatedShows: function(showId){
		return Guidebox.shows.related(showId)
	},
    getAvailableContent: function(showId) {
	    return Guidebox.shows.availableContent(showId);
    }
};
