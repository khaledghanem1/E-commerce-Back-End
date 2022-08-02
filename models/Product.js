// import important parts of sequelize library
const { Model, DataTypes, INTEGER, STRING, DECIMAL  } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      DataTypes: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  product_name: {
      DataTypes: DataTypes.STRING,
      allowNull: false
  },
  price: {
      DataTypes: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
          isDecimal: true
      }
  },
  stock: {
      DataTypes: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
          isNumeric: true
      }
  },
  category_id: {
      DataTypes: DataTypes.INTEGER,
      references: {
          model: 'Category',
          key: 'id'
      }
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
