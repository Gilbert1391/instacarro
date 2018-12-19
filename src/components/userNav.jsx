import React from "react";
import user from "../assets/user.png";
import caret from "../assets/caret.png";

const UserNav = () => {
  return (
    <nav className="user-nav">
      <img src={user} alt="User" className="user-nav__user-photo" />
      <span>User Test</span>
      <img src={caret} alt="Down-arrow icon" className="user-nav__down-arrow" />
    </nav>
  );
};

export default UserNav;
