import React from "react";
import userIcon from "../assets/user.png";
import caretDown from "../assets/caret.png";

const UserNav = () => {
  return (
    <nav className="user-nav">
      <img src={userIcon} alt="User" className="user-nav__user-photo" />
      <span>User Test</span>
      <img
        src={caretDown}
        alt="Down-arrow icon"
        className="user-nav__down-arrow"
      />
    </nav>
  );
};

export default UserNav;
