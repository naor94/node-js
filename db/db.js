const Sequelize  = require('sequelize');

const sequelize = new Sequelize('cat', 'root', 'naor2468', {
    host: 'localhost',
    dialect: 'mysql' 
  });


  
module.exports=sequelize;



