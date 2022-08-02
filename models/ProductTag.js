const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      DataTypes: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  product_id: {
      DataTypes: DataTypes.INTEGER,
      references: {
          model: 'Product',
          key: 'ids'
      }
  },
  tag_id: {
      DataTypes: DataTypes.INTEGER,
      references: {
          model: 'Tag',
          key: 'id'
      }
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
