import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { BrowserRouter as Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory();

const Header = () => (
  <div className="header">
    <Router history={history}>
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </Router>
  </div>
);

export default Header;
