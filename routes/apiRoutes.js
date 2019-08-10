var db = require("../models");

module.exports = function(app) {
	// Get all examples
	app.get("/api/smoothies", function(req, res) {
		db.Smoothie.findAll({}).then(function(dbSmoothies) {
			res.json(dbSmoothies);
		});
	});

	// Create a new example
	app.post("/api/smoothies", function(req, res) {
		console.log(req.body);
		db.Smoothie.create(req.body).then(function(dbSmoothie) {
			res.json(dbSmoothie);
		});
	});

	// Delete an example by id
	app.delete("/api/smoothies/:id", function(req, res) {
		db.Smoothie.destroy({ where: { id: req.params.id } }).then(function(
			dbSmoothie,
		) {
			res.json(dbSmoothie);
		});
	});
};
