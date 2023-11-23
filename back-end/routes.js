const express = require("express");
const userModel = require("./models");
const univModel = require("./universityModel");
const userModel_signup = require("./models_signup");
const bcrypt = require("bcrypt");
const saltRounds = 10;
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
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(hashedPassword);
    const user = new userModel_signup({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.post("/Login_user", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  userModel_signup.findOne({ email: email }).then(async (user) => {
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      // console.log(passwordMatch);
      if (passwordMatch) {
        res.status(200).json("Success");
      } else {
        res.json("pwd incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

module.exports = app;
