// posts.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/config');
const { User } = require("../model/user"); // Import User model correctly

class Post extends Model {}

Post.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 12],
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 30],
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [15, 100],
      },
    },
  },
  {
    sequelize
  }
);

// Use a function callback to ensure models are defined at the time of association
// Post.belongsTo(User, () => {}, { foreignKey: 'username' });

module.exports = Post;
