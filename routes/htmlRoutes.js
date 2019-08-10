var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Smoothie.findAll({}).then(function(dbSmoothies) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbSmoothies
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Smoothie.findOne({ where: { id: req.params.id } }).then(function(dbSmoothies) {
      res.render("example", {
        example: dbSmoothies
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
