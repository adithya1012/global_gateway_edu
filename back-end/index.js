const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());
//Database

const database = (module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  const dbname = "GGE_DB";
  try {
    const client = mongoose
      .connect(
        "mongodb+srv://manvikishore7:%23123%23Manvi@cluster0.xbak0ji.mongodb.net/gge?retryWrites=true&w=majority",
        connectionParams
      )
      .then(() => {
        console.log("Database connected successfully");
      })
      .catch((error) => {
        console.error("Database connection failed:", error);
      });
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
});
database();
// app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000", // Replace this port with the frontend port when we place in Heroku platform.
  credentials: true, // this is required to store the cookies. Cross-Origin Resource Sharing for node.
};

app.use(cors(corsOptions));
app.use(Router);
const PORT = 8000;
console.log("+++++++PORT NUMBER+++++");
console.log(PORT);
app.listen(PORT, () => {
  console.log("server is running");
});
module.exports = app;
