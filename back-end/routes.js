const express = require("express");
const userModel = require("./models");
const userModel_scheduleappointment = require("./models_scheduleappointment");
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

app.get("/users", async (request, response) => {
  const users = await userModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});
module.exports = app;
