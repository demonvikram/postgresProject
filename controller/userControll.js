const User=require('../model/user')
const sequelize=require("../config/config");
const { Sequelize } = require('sequelize');


const createUser = async (req, res) => {
    try {
      const { username, email } = req.body;
      const newUser = await User.create({
        username,
        email,
      });
  
      if (!newUser) {
        return res.status(401).json({
          message: 'Bad request',
        });
      }
  
      // Handle success scenario
      res.status(201).json({
        message: 'User created successfully',
        user: newUser,
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
        message: 'Internal server error',
      });
    }
  };
  
  const findUser = async (req, res) => {
    try {
      const { usrnme } = req.body;
      const foundUser = await User.findOne({
        where: {
          username: usrnme,
        },
      });
  
      if (!foundUser) {
        return res.status(404).json({
          message: 'User not found',
        });
      }
  
      // Handle success scenario
      res.status(200).json({
        message: 'User found successfully',
        user: foundUser,
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
        message: 'Internal server error',
      });
    }
  };

  const findAll = async (req, res) => {
    try {
      const allUsers = await sequelize.query('SELECT * FROM "Users"', {
        type: Sequelize.QueryTypes.SELECT
      });
  
      return res.status(200).json({
        message: 'All users are here',
        users: allUsers
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Server error',
        error: error.message
      });
    }
  };

 const removeUser=async(req,res)=>{
    try {
        const {email}=req.body;
        
    } catch (error) {
        return res.status(500).json({
            message:'internal server error',
            error:error.message
        })
    }
 }

  module.exports={createUser,findUser, findAll , removeUser}