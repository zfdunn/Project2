var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Smoothie.findAll({}).then(function(dbSmoothie) {
      res.render("index", {
        msg: "Smoothie Project",
        examples: "dbExample"
      });
    });
  });

  // Load example page and pass in an Smoothie by id
  app.get("/smoothie/:id", function(req, res) {
    db.Smoothie.findOne({ where: { id: req.params.id } }).then(function(
      dbSmoothie
    ) {
      res.render("example", {
        example: "dbExample"
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
