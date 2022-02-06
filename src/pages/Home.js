import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export function Home() {
  const history = useHistory()
  return (
    <div className="home-page">
      <h1>You need it</h1>
      <h1>We rent it</h1>
      <p>We are an online platform providing rental services.</p>
      <Button margin="normal" style={{ margin: "0 10px 0 0" }} variant="contained" onClick={() => history.push("/user/signup")} >Sign-up</Button>
      <Button margin="normal" style={{ margin: "0 10px 0 0" }} variant="contained" onClick={() => history.push("/user/login")} >Login</Button>
      <Button margin="normal" style={{ margin: "0 10px 0 0" }} variant="contained" onClick={() => history.push("/userproducts")} >Products</Button>
    </div>
  );
}
