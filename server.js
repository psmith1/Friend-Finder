// // Dependencies
// // =============================================================
// var app = express();
// var express = require("express");
// var path = require("path");
// // require("./app/data/friends.js");
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

// // Sets up the Express App
// // =============================================================

// var PORT = process.env.PORT || 8080;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Listener
// // =============================================================

// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
// });

const express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});