const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "User",
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
      surname: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "birth_date"
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      role: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 2
      },
      avatar: {
        type: DataTypes.STRING,
        defaultValue: "default-avatar.jpg"
      }
    }, {
      tableName: "USER",
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );

  model.associate = (models) => {
    model.hasOne(models.Cart, {
      as: "cart",
      foreignKey: "user_id",
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE' // Que vendria a ser onUpdate
    })

    model.hasMany(models.Purchase, {
      as: "purchases",
      foreignKey: "user_id"
    })
  }

  return model;
};
