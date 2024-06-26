
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
// const send_message=require("./send_message.mjs")

// const { run_send_message } = require('./send_message.mjs');
// run_send_message();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
// import fetch from "../node-fetch"
// const requireAuth = require("./authMiddleware");
 
// const saltRounds =10;
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');
 
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'e0a97ecce36200a8b762a9cec2b5e654-30b58138-b2ec0581'});
 
const app = express();

const SERVICE_PLAN_ID = '59b5892751a147a387c39c528155c16f';
const API_TOKEN = 'acfadde5dd8e4f7795841420af3db4bf';
const SINCH_NUMBER = '+12068489628';
// const TO_NUMBER = '+12604587401';
 

 
// sending message
async function run_send_message(mobilenumber) {
  try{
  const resp = await fetch(
    'https://us.sms.api.sinch.com/xms/v1/' + SERVICE_PLAN_ID + '/batches',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + API_TOKEN
      },
      body: JSON.stringify({
        from: SINCH_NUMBER,
        to: [mobilenumber],
        body: 'Hello, Your appointment with GGE experts is confirmed for December 7, 2023, at 11:00 AM. Join the meeting using the provided URL https://meet.google.com/gyz-ewdv-rpa'
      })
    }
  );
  const data = await resp.json();
  console.log(data);
  console.log();
} catch (error) {
  // response.status(500).send(error);
  console.error("Error while sending a message")
  console.log(error);
}
}

async function run_send_email(email) {
  try{
    
     
    mg.messages.create('sandboxb36c996a36664a2db7b2c280916f5648.mailgun.org', {
        from: "Excited User <mailgun@ssandboxb36c996a36664a2db7b2c280916f5648.mailgun.org>",
        to: [email],
        subject: "Appointment confirmation from GGE",
        text: "Your Appointment is confirmed with the GGE expert on 07 December 2024 at 11am. following is the URL to join the call: https://meet.google.com/tju-acvw-onn",
        html: "<h1>Appointment Confirmation From GGE </h1>"
    })
    .then(msg => console.log(msg)) // logs response data
    .catch(err => console.log(err)); // logs any error

  } catch (error) {
    // response.status(500).send(error);
    console.error("Error while sending an email")
    console.log(error);
  }
};

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
    run_send_message(mobilenumber);
    run_send_email(email);
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
    run_send_message(mobilenumber);
    run_send_email(email);
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
    run_send_message(mobilenumber);
    run_send_email(email);
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
    run_send_message(mobilenumber);
    run_send_email(email);
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