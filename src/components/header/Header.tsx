import * as React from "react";
import "./Header.css"

import Navigation from "../navigation/Navigation";

const Header: React.SFC = () => {
  return (
  <div className="header">
      <Navigation />
  </div>
  );
}
 
export default Header;