import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const instance = axios.create({});
    instance
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const items = response.data;
        setUsers(items);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    const aiosInstance = axios.create({});
    aiosInstance
      .post("https://jsonplaceholder.typicode.com/todos", data)
      .then((response) => {
        const newUser = response.data;
        console.log(newUser);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <input
        type="text"
        onChange={(event) => setFirstName(event.target.value)}
        value={firstName}
        placeholder="Enter first name"
      />
      <input
        type="text"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        placeholder="Enter lastName"
      />

      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter Email"
      />
      <button onClick={handleClick}>Add user</button>

      <div>
        {users.map((user, index) => (
          <ul>
            <li key={index}>
              {index + 1}
              {user.firstName} {user.lastName}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
