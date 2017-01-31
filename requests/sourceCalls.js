const dotenv = require('dotenv').config();
const client = require('guidebox');
const apiKey = process.env.API_KEY;
const Guidebox = new client(apiKey, 'US');

module.exports = {
  getAllSources: function () {
    return Guidebox.sources.list();
  },
  


};
