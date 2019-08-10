module.exports = function(sequelize, DataTypes) {
  var Smoothie = sequelize.define("Smoothie", {
    name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    description: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    author: DataTypes.STRING
  });
  return Smoothie;
};
