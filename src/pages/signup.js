import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { API } from "../global";

export function Signup() {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()

  function handleSubmit() {
    const newUser = {
      "username": name,
      "password": password
    }
    fetch(`${API}/user/signup`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-type": "application/json" }
    })
      .then(() => history.push("/user/login"))
    // history.push("/")
  }

  return (
    <div className="signup">
      <h1>Sign-up</h1>
      {/* <form> */}
      <br />
      <br />
      <input type="text" value={name} placeholder="username" onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <input type="text" value={password} placeholder="username" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>

      {/* </form> */}

    </div >
  );
}
