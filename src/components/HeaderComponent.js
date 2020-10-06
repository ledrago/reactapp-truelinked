import React from "react";
import headerStyle from "./HeaderComponent.module.scss";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Header = () => (
  <header className={headerStyle.header}>
    <h6>
      <Link className={headerStyle.title} to="/">
        TrueLinked App by Jerome Drago
      </Link>
    </h6>
    <AccountCircleIcon fontSize="large" />
  </header>
);

export default Header;
