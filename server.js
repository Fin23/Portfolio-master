
// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
// var db = require("./app/models")

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("index2.html"));

// Routes
// =============================================================
//require("./app/routes/api-routes.js")(app);
//  require("./routes/html-routes.js")(app);

// require("./app/routes/api-routes.js")(app);

// Starts the server to begin listening
// =============================================================
// db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
// });