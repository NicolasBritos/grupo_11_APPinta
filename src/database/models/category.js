const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        defaultValue: "img-not-found.jpg"
      }
    }, {
      tableName: "CATEGORY",
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  )

  model.associate = (models) => {
    model.hasMany(models.Product, {
      as: "products",
      foreignKey: "category_id",
    })
  }

  return model
}
