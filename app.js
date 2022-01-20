const express =require("express");
const app= express();
const port = process.env.PORT || 3000

//const cat =require ("./models/cat")
const sequelize =require("./db/db")


app.use(express.json())

console.log(sequelize.arr);



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})