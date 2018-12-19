import React from "react";
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";

const HeaderGroup = () => {
  return (
    <div className="header-group">
      <img src={logo} alt="Instacarro logo" className="header-group__logo" />
      <div className="header-group__vl">&nbsp;</div>
      <img src={phone} alt="Phone icon" className="header-group__icon" />
      <span>(11) 3569 - 3465</span>
    </div>
  );
};

export default HeaderGroup;
