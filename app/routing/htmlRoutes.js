
var path = require("path");
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
module.exports = function(app) {

  app.get("/home", function(req, res) {
    console.log("hit");
  
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

// Survey route that sends the user to the survey form page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Default route
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

}