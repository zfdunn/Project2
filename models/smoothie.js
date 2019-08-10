module.exports = function(sequelize, DataTypes) {
  var Smoothie = sequelize.define("Smoothie", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Smoothie;
};
