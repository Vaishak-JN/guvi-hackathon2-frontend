import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { Switch, Route, Link, Redirect } from 'react-router-dom';


export function Header() {
  const history = useHistory()
  return (
    <nav>
      <div className="nav">
        <h2 className="nav-heading" onClick={() => history.push("/")}>Rent-It</h2>
        <div className="nav-items">
          <h2 className="cart-btn" onClick={() => history.push("/cart")}>Cart</h2>
          <h2>Logout</h2>
        </div>
      </div>
    </nav>
  );
}
