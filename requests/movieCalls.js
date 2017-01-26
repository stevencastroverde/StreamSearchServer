const dotenv = require('dotenv').config();
const client = require('guidebox');
const apiKey = process.env.API_KEY;
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
