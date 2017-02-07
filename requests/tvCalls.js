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
    return Guidebox.shows.episodes(showId, {sources:'free', include_links:true});
  },
  getEpisodes: function(showId, subscriptions){
    return Guidebox.shows.episodes(showId, {sources: subscriptions, include_links: true});
  },
  getSources: function(){
    return Guidebox.sources.list({type:'subscription'});
  }
};
