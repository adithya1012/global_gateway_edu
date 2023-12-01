const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");
const cors = require("cors");

const app = express();
app.use(express.json());
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
app.use(cors());
app.use(Router);
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log("server is running");
});
