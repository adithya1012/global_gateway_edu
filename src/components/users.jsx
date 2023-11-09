import { useState } from "react";
import Axios from "axios";

function Users() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleClick = (user) => {
    let result = Axios.post("http://localhost:8000/add_user", {
      name: name,
      email: email,
    });
    result = result.json();
    console.warn(result);
    if (result) {
      alert("Data saved succesfully");
      setEmail("");
      setName("");
    }
  };
  return (
    <>
      <h1>Add User </h1>
      <form action="">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          submit
        </button>
      </form>
    </>
  );
}

export default Users;
