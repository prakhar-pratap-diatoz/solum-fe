import React from "react";
import { AccountBalance, Person, Settings } from "@mui/icons-material";
import "./style.scss";

const SideNav = () => {
  const sideMenu = ["Dashboard", "License Requests", "Licenses", "Users"];
  return (
    <div id="side_nav_container">
      <div className="company-icon">
        <img
          className="company-image"
          src="https://media.licdn.com/dms/image/v2/C4D0BAQHpbhr8j4SHqg/company-logo_200_200/company-logo_200_200/0/1630566515198/solumesl_logo?e=2147483647&v=beta&t=0yhg0GGW3O8TWNGtuaOOoMMinGct1MjqXCrSoeuA-80"
          alt="company logo"
        />
      </div>
      {sideMenu?.map((menu: string) => (
        <div className="menu-icon-card">
          <div className="icon">
            <AccountBalance />
          </div>
          <div className="menu-name">{menu}</div>
        </div>
      ))}
    </div>
  );
};

export default SideNav;
