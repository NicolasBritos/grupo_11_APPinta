const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "Purchase",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      datetime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      paymentStatus: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
        field: "payment_status"
      }
    }
  );

  return model;
};
