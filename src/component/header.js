import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav style=
              {{
                justifyContent:"center",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: 900,
                size: "24px",
                background:"red",
                margin:"0px",
                justifyItems: "center",
                height:"20%"
              }}
    >
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/about">
        About
      </NavLink>
      <NavLink activeClassName="active" to="/contact">
        Contact
      </NavLink>
    </nav>
  );
}
export default Header;