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
        field: "qr_code"
      },
      discount: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
      },
      img: {
        type: DataTypes.STRING(300),
        defaultValue: "img-not-found.jpg"
      }
    }
  );

  return model;
};
