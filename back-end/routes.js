const express = require("express");
const userModel = require("./models");
const userModel_signup = require("./models_signup");
const bcrypt= require('bcrypt');
const saltRounds =10;
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');


const app = express();

app.post("/add_user", async (request, response) => {
  const user = new userModel(request.body);
  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/add_user_detail", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name)
  console.log(email)
  console.log(password)
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(hashedPassword)
    const user = new userModel_signup({ name, email, password :hashedPassword });
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.post("/Login_user", (req,res) => {
  const email = req.body.email;
  const password = req.body.password;
  userModel_signup.findOne({email:email})
  .then(async user =>{
      if(user){
          const passwordMatch =  await bcrypt.compare(password, user.password);
          // console.log(passwordMatch);
          if(passwordMatch){
              res.status(200).json("Success")
          }else {
              res.json("pwd incorrect")
          }
      }else{
          res.json("No record existed")
      }
  })
})

app.get("/users", async (request, response) => {
  const users = await userModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});
module.exports = app;
