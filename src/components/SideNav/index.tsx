import React from "react";
import { useNavigate } from "react-router-dom";
import { AccountBalance, Person, Settings } from "@mui/icons-material";
import "./style.scss";

const SideNav = () => {
  const navigate = useNavigate();
  const sideMenu = [
    { menuName: "Dashboard", url: "/dashboard" },
    { menuName: "Dashboard", url: "/dashboard" },
    { menuName: "Licenses", url: "/licenses" },
    { menuName: "Users", url: "/users" },
    { menuName: "UserDashboard", url: "/user-dashboard" },
  ];
  return (
    <div id="side_nav_container">
      <div className="company-icon">
        <img
          className="company-image"
          src="https://media.licdn.com/dms/image/v2/C4D0BAQHpbhr8j4SHqg/company-logo_200_200/company-logo_200_200/0/1630566515198/solumesl_logo?e=2147483647&v=beta&t=0yhg0GGW3O8TWNGtuaOOoMMinGct1MjqXCrSoeuA-80"
          alt="company logo"
        />
      </div>
      {sideMenu?.map(({menuName, url}: {menuName : string , url : string}) => (
        <div className="menu-icon-card" onClick={()=> navigate(url)}>
          <div className="icon">
            <AccountBalance />
          </div>
          <div className="menu-name">{menuName}</div>
        </div>
      ))}
    </div>
  );
};

export default SideNav;
