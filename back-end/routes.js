const express = require("express");
const userModel = require("./models");
const univModel = require("./universityModel");
const userModel_signup = require("./models_signup");
const jwt = require('jsonwebtoken');
require('dotenv').config();
// const cors = require('cors');
const bcrypt= require('bcrypt');
// const requireAuth = require("./authMiddleware");

// const saltRounds =10;
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

const app = express();

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('User_data validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      errors[properties.path] = properties.message;
    });
  }
  const message = Object.values(errors)
  .filter(value => value !== '')
  .join(', ');
  return message;
}

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  console.log(id);
  const token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    // const token = jwt.sign({ id }, "accesstoken", {
    expiresIn: maxAge,
  });
  console.log(token);
  return token;
};

app.post("/add_user", async (request, response) => {
  const user = new userModel(request.body);
  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/university", async (request, response) => {
  const university = request.body.data;
  const query = {
    degree: university.degree,
    major: university.major,
    gpa: { $lte: university.gpa },
    gre: { $lte: university.gre },
    tutionfee: { $lte: university.tutionfee },
    toefl: { $lte: university.toefl },
  };
  const result = await univModel.find(query);
  console.log(result);
  try {
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/add_user_detail", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name);
  console.log(email);
  console.log(password);
  try {
    // removing the password hasing from here as we are doing in middlewear.
    
    const user = await userModel_signup.create({name, email, password});
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      httpOnly: false,
      // secure: process.env.NODE_ENV === "production",
      maxAge: maxAge*1000
    })
    // .status(200)
    // .json({ message: "Logged in successfully 😊 👌" });
    // console.log(token);
    
    res.status(201).json(user);
    
  } catch (err) {
    const errors = handleErrors(err);
    console.log(errors);
    res.status(400).json({ errors });
  }
});

app.post("/Login_user", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  userModel_signup.findOne({email:email})
  .then(async user =>{
      if(user){
          const passwordMatch =  await bcrypt.compare(password, user.password);
          // console.log(passwordMatch);
          if(passwordMatch){
            const token = createToken(user._id);
            res.cookie("jwt", token, {
              httpOnly: false,
              // secure: process.env.NODE_ENV === "production",
              maxAge: maxAge*1000
            })
            res.status(200).json("Success");
          }else {
              res.json("pwd incorrect");
          }
      }else{
          res.json("No record existed");
      }
    })
  });

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
