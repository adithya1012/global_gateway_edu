const m = require("mongodb");
const { MongoClient } = m;

// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/your_database_name", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Connection URI (This is a database on my MongoDB Atlas)

//await client.connect();

// async function run() {
//   try {
//     const database = client.db("GGE_DB");
//     const users = await database.collection("users");
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { name: "Manvi" };
//     const user = users.findOne(query);
//     console.log(user);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     client.close();
//   }
// }
// run().catch(console.dir);

async function run() {
  const remoteurl =
    "mongodb+srv://manvikishore7:%23123%23Manvi@cluster0.xbak0ji.mongodb.net/?retryWrites=true&w=majority";
  // const localurl = 'mongodb://localhost:27017';

  // Use connect method to connect to the Server
  const client = new MongoClient(remoteurl);
  // const data = await client.db("GGE_DB").collection("users").find({}).toArray();
  const database = client.db("GGE_DB");
  const query = { name: "Manvi" };
  const user = await client
    .db("GGE_DB")
    .collection("users")
    .findOne(query)
    .toArray();
  // Query for a movie that has the title 'Back to the Future'

  // const user = users..;

  console.log(user);
}
run();
