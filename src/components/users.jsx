import { useState } from "react";
import { MongoClient } from "mongodb";

function Users() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  //   const remoteurl =
  //     "mongodb+srv://manvikishore7:%23123%23Manvi@cluster0.xbak0ji.mongodb.net/?retryWrites=true&w=majority";
  //   client = new MongoClient(remoteurl);

  //   const handleOnSubmit = async (e) => {
  //     const query = { name: "Manvi" };
  //     const result = await client
  //       .db("GGE_DB")
  //       .collection("users")
  //       .findOne(query)
  //       .toArray();

  //     setUser(result);
  //   };

  return (
    <>
      <h1>This is React WebApp </h1>
      <h2>{user}</h2>
      <form action="">
        <input
          type="text"
          placeholder="name"
          value={name}
          // onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          //onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={handleOnSubmit}>
          submit
        </button>
      </form>
    </>
  );
}

export default Users;
