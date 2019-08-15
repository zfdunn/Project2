var db = require("../models");

module.exports = function(app) {
  // Get all Smoothies
  app.get("/api/smoothie", function(req, res) {
    db.Smoothie.findAll({}).then(function(dbSmoothie) {
      res.json(dbSmoothie);
    });
  });

  // Create a new Smoothie
  app.post("/api/smoothie", function(req, res) {
    db.Smoothie.create(req.body).then(function(dbSmoothie) {
      res.json(dbSmoothie);
    });
  });

  // Delete an Smoothie by id
  app.delete("/api/smoothie/:id", function(req, res) {
    db.Smoothie.destroy({ where: { id: req.params.id } }).then(function(
      dbSmoothie
    ) {
      res.json(dbSmoothie);
    });
  });
};
