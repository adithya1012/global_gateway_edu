const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
<<<<<<< HEAD
=======
  password: {
    type: String,
    required: true,
  }
>>>>>>> 51820d7c60ae06b1e21cfc6b3bdaad5dc59a98be
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
