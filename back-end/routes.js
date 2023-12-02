const express = require("express");
const userModel = require("./models");
const userModel_scheduleappointment = require("./models_scheduleappointment");
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

app.post("/add_user_appointment", async (request, response) => {
  // const user = new userModel_scheduleappointment(request.body);
  const { name, email, mobilenumber } = request.body;
  console.log(name);
  console.log(email);
  console.log(mobilenumber);

  try {
    const user = new userModel_scheduleappointment({ name, email, mobilenumber});
    await user.save();
    response.send(user);
    console.log(user);
  } catch (error) {
    console.error("Error:", error);
    response.status(500).send(error);
  }
});

app.post("/add_usersop_appointment", async (request, response) => {
  // const user = new userModel_scheduleappointment(request.body);
  const { name, email, mobilenumber } = request.body;
  console.log(name);
  console.log(email);
  console.log(mobilenumber);

  try {
    const user = new userModel_scheduleappointment({ name, email, mobilenumber});
    await user.save();
    response.send(user);
    console.log(user);
  } catch (error) {
    console.error("Error:", error);
    response.status(500).send(error);
  }
});

app.post("/add_userlor_appointment", async (request, response) => {
  // const user = new userModel_scheduleappointment(request.body);
  const { name, email, mobilenumber } = request.body;
  console.log(name);
  console.log(email);
  console.log(mobilenumber);

  try {
    const user = new userModel_scheduleappointment({ name, email, mobilenumber});
    await user.save();
    response.send(user);
    console.log(user);
  } catch (error) {
    console.error("Error:", error);
    response.status(500).send(error);
  }
});

app.post("/add_userresume_appointment", async (request, response) => {
  // const user = new userModel_scheduleappointment(request.body);
  console.log(request.body)
  const { name, email, mobilenumber } = request.body;
  console.log(name);
  console.log(email);
  console.log(mobilenumber);

  try {
    const user = new userModel_scheduleappointment({ name, email, mobilenumber});
    await user.save();
    response.send(user);
    console.log(user);
  } catch (error) {
    console.error("Error:", error);
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

app.delete("/delete_user", (req, res) => {
  const email = req.body.email;
  console.log("************")
  console.log(req.body)
  console.log("************")
  userModel_signup.findOne({ email: email })
    .then(async user => {
      if (user) {
        // Code to delete the record in the db
        userModel_signup.deleteOne({ email: email })
          .then(() => {
            res.json("Record deleted successfully");
          })
          .catch(error => {
            res.status(500).json("Error deleting record: " + error.message);
          });
      } else {
        res.json("No record existed");
      }
    })
    .catch(error => {
      res.status(500).json("Error finding user: " + error.message);
    });
});


module.exports = app;
