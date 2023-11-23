const express = require("express");
const userModel = require("./models");
const univModel = require("./universityModel");
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
module.exports = app;
