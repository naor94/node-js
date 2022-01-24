const express =require("express");
const app= express();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
const catRoutes = require('./routes/catRouter');
const userRoutes = require('./routes/userRouter');

const cat =require ("./models/cat")
const user =require ("./models/user")

const sequelize =require("./db/db")

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

  app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json())
app.use(catRoutes)
app.use(userRoutes)




sequelize
  .sync()
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
