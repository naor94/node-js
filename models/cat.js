const Sequelize=require('sequelize');

const sequelize =require("../db/db")


const Cat =sequelize.define('cat', { 

  
    name:{
         type: Sequelize.STRING,
         allowNull:false 

    } ,

    age:{
        type: Sequelize.INTEGER,
        allowNull: false,
    } ,

   weight:{
       type: Sequelize.INTEGER
   },
   userId:{
    type: Sequelize.INTEGER

   } 

});


module.exports=Cat;