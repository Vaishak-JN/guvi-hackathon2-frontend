import './App.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Booking } from './pages/Booking';
import { Header } from './pages/Header';
import { BrowserRouter, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Cart } from './pages/Cart';
import { Products } from './pages/Products';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;


