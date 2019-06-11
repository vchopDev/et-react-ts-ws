import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";


const Navigation: React.SFC = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to="/homepage" activeClassName="header-link-active">HOMEPAGE</NavLink>
        </li>
        <li>
          <NavLink to="/catalog" activeClassName="header-link-active">CATALOG</NavLink>
        </li>
      </ul>
    </div>
  );
}
 
export default Navigation;