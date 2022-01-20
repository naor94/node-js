const Sequelize=require('sequelize');

const sequelize =require("../db/db")


const Cat =sequelize.define('cat', { 

    uid:{
        type: Sequelize.NUMBER,
        allowNull:false,
        autoIncreament:true


    },
    name:{
         type: Sequelize.STRING,
         allowNull:false 

    } ,

    age:{
        type: Sequelize.NUMBER,
        allowNull:false 
   } ,

   weight: Sequelize.NUMBER

});


module.exports=Cat;