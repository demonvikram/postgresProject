// user.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/config');
const Post = require('../model/posts'); 

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [6, 12],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize
  }
);


// const initializeDatabase = async () => {
//   await sequelize.sync({ force: true });
//   // Additional initialization code if needed
// };

// initializeDatabase();

module.exports = User;

