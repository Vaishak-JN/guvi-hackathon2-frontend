import { useState } from "react";
import { useHistory } from 'react-router-dom';

export function Login() {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [p, setP] = useState({})

  const history = useHistory()

  function handleSubmit() {
    const newUser = {
      "username": name,
      "password": password
    }
    fetch("https://vrentalapp.herokuapp.com/user/login", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-type": "application/json" }
    })
      .then(res => res.json())
      .then(data => localStorage.setItem("token", data.token))
      .then(() => history.push("/"))
    // history.push("/")
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <br />
      <br />
      <input type="text" value={name} placeholder="username" onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <input type="text" value={password} placeholder="username" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <p>{p.token}</p>

    </div>
  );
}
