const client = require('guidebox');
const apiKey = 'rKcE8UjpWG7r8hIkG3Dus9HltJxmoYxp';
const Guidebox = new client(apiKey, 'US');

module.exports = {
  getFreeTv: function(){
    return Guidebox.shows.list({sources: 'free', platform:'web'});
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
