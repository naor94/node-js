const Sequelize=require('sequelize');

const sequelize =require("../db/db")


const User =sequelize.define('user', { 

  
    name:{
         type: Sequelize.STRING,
         allowNull:false 

    } ,

    age:{
        type: Sequelize.INTEGER,
        allowNull: false,
    } ,

   email:{
       type: Sequelize.STRING
   } ,
   

});


module.exports=User;

