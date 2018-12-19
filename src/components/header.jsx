import React from "react";
import UserNav from "./userNav";
import HeaderGroup from "./headerGroup";

const Header = () => {
  return (
    <header className="header">
      <HeaderGroup />
      <UserNav />
    </header>
  );
};

export default Header;
