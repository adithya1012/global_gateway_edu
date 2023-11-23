const mongoose = require("mongoose");
const UniversitySchema = new mongoose.Schema({
  rank: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  universityname: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  gre: {
    type: String,
    required: true,
  },
  toefl: {
    type: String,
    required: true,
  },
  tutionfee: {
    type: String,
    required: true,
  },
  gpa: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
});

const University = mongoose.model("universities", UniversitySchema);
module.exports = University;
