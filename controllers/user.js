const sequelize =require("../db/db")
const User =require("../models/user")
const { QueryTypes } = require('sequelize');
const bcrypt = require('bcrypt');


exports.loginUser =async(req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;
    const user = await User.findOne({ where: { email: email} });
    if (user === null) {
    res.status(400).send("login failed")
    } else {
     bcrypt.compare(password, user.password, function(err, result) {
         if(err){
             console.log("failed");
         }
         else if(result===false){
             res.send("password worng")
         }
         else{
             res.status(201).send(user)
         }

    
    });
    }
   



}

exports.registerUser=async(req,res,next)=>{
    const name =req.body.name;
    const age =req.body.age;
    const email =req.body.email;
    const pssword =req.body.password;
    const project = await User.findOne({ where: { email: email } });
    if (project !== null) {
        res.send("user exist")
    
    } else {

        bcrypt.hash(pssword, 10, function(err, hash) {
            if(err){
                res.send("error")
            }
            else{
                User.create({
                    name: name,
                    age: age,
                    email: email,
                    password: hash
                    
                  })
                    .then(result => {
                      res.send("created user")
                      
                    })
                    .catch(err => {
                      console.log(err);
                    });
            }
           
        });

    }




}