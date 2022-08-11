const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "Cart",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      discount: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defautlValue: 0
      },
      total: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: false,
      }
    }, {
      tableName: "CART",
      timestamps: false
    }
  );

  return model;
};
