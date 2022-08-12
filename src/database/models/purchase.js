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
      paymentStatus: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
        field: "payment_status"
      }
    }, {
      tableName: "PURCHASE",
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );

  return model;
};
