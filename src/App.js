import './App.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Signup } from './pages/signup';
import { Booking } from './pages/Booking';
import { Header } from './pages/Header';
import { BrowserRouter, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Cart } from './pages/Cart';
import { Products } from './pages/Products';

function App() {
  return (
    <div className="App">

      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/user/signup">
          <Signup />
        </Route>
        <Route exact path="/user/login">
          <Login />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;


