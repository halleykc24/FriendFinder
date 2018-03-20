
// LOAD DATA

var friendsData = require("../data/friends");



// ROUTES


module.exports = function(app) {
  // API GET Requests

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
 
  app.post("/api/friends", function(req, res) {
    
    res.json(true);
  });

};