const client = require('guidebox');
const apiKey = 'rKcE8UjpWG7r8hIkG3Dus9HltJxmoYxp';
const Guidebox = new client(apiKey, 'US');



module.exports = {
  getFreeMovies: function (){
    return Guidebox.movies.list({sources: 'free', platform: 'web'});
  },
  searchMovies: function(titleInput){
    return Guidebox.search.movies({field: 'title', query: titleInput});
  },
  getSpecificMovie: function(movieId){
    return Guidebox.movies.retrieve(movieId);
  },
  relatedMovies: function(movieId){
    return Guidebox.movies.related(movieId);
  },





};
