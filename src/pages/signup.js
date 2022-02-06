import { useState } from "react";
import { useHistory } from 'react-router-dom';

export function Signup() {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()
  function handleSubmit() {
    history.push("/")
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
