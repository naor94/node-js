const sequelize =require("../db/db")
const Cat =require("../models/cat")
const { QueryTypes } = require('sequelize');




exports.postAddCat  =(req,res,next)=>{
    const name=req.body.name;
    const age= req.body.age;
    const weight=req.body.weight;
    Cat.create({
        name: name,
        age: age,
        weight: weight
        
      })
        .then(result => {
          res.send("created cat")
          
        })
        .catch(err => {
          console.log(err);
        });
   
}

exports.postEditCat=(req,res,next)=>{
    const catId=req.body.id;
    const updateName=req.body.name;
    res.send(catId);
  
   
}

exports.getAllCat  = async (req,res,next)=>{
    const users = await sequelize.query("SELECT * FROM `cats` as c where c.age >6", { type: QueryTypes.SELECT });
    res.send (users);

}