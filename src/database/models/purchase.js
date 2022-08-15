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
  
  model.associate = (models) => {
    model.belongsTo(models.User, {
      as: "user",
      foreignKey: "user_id"
    })

    model.belongsTo(models.PaymentMethod, {
      as: "paymentMethod",
      foreignKey: "payment_method_id"
    })
  }
  
  return model;
};
