// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var spellBook = sequelize.define("spellbook", {
  spellName: Sequelize.STRING,
  author: Sequelize.STRING,
  description: Sequelize.STRING,
  pages: Sequelize.INTEGER
});

// Syncs with DB
spellBook.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = spellBook;
