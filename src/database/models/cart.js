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
        defaultValue: 0
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id'
      }
    }, {
      tableName: "CART",
      timestamps: false
    }
  );

  model.associate = (models) => {
    model.belongsTo(models.User, {
      as: "user",
      foreignKey: 'user_id',
    })

    model.belongsToMany(models.Product, {
      as: "products",
      through: "product_cart",
      foreignKey: "cart_id",
      otherKey: "product_id",
      timestamps: false
    })
  }

  return model;
};
