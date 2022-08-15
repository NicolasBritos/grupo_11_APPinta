const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: false,
      },
      stock: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      qrCode: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: "qr_code",
      },
      discount: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      img: {
        type: DataTypes.STRING,
        defaultValue: "img-not-found.jpg",
      },
    },
    {
      tableName: "PRODUCT",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  )

  model.associate = (models) => {
    model.belongsTo(models.Category, {
      as: "category",
      foreignKey: "category_id",
    })

    model.belongsToMany(models.Cart, {
      as: "carts",
      through: "product_cart",
      foreignKey: "product_id",
      otherKey: "cart_id",
      timestamps: false
    })
  }

  return model
};
