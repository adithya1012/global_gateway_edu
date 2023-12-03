const express = require("express");
const userModel = require("./models");
const univModel = require("./universityModel");
const userModel_signup = require("./models_signup");
const userModel_scheduleappointment = require("./models_scheduleappointment");
const path = require("path");
const jwt = require('jsonwebtoken');
require('dotenv').config();
// const cors = require('cors');
const bcrypt= require('bcrypt');
// const requireAuth = require("./authMiddleware");

// const saltRounds =10;
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');
console.log(__dirname);
const path_val = path.join(__dirname, "../src/index.js");
console.log(path_val);
console.log("$$$$$$$$$$$$$$$$$");
const app = express();

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // duplicate email error
  if (err.code === 11000) {
    const message = 'The email is already registered';
    return message;
  }

  // validation errors
  console.log(err.message);
  if (err.message.includes('User_data1 validation failed')) {
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
  // const token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    const token = jwt.sign({ id }, "accesstoken", {
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
app.post("/university", async (request, response) => {
  console.log("THE UNIVERSITY REC CALL");
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

app.get("/university", (request, response) => {
  const path_val = path.join(__dirname, "../src/index.js");
  console.log(path_val);
  console.log(__dirname);
  console.log("blhblhblhblh");
  // console.log(ls);
  console.log("HELLOOOOO");
  response.send("HELLOOOOO");
});

// app.get("/*", function(req, res) {
//   res.sendFile(
//     path.join(__dirname, "../src/index.html"),
//     function(err) {
//       if (err) {
//         console.log(err);
//         res.status(500).send(err);
//       }
//     }
//   )
// });

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

module.exports = app;
