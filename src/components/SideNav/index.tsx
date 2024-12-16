import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AccountBalance, Person, Settings } from "@mui/icons-material";
import "./style.scss";

const SideNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const sideMenu = [
    { menuName: "Dashboard", url: "/dashboard" },
    { menuName: "License Requests", url: "/license-requests" },
    { menuName: "Customers", url: "/customers" },
    { menuName: "Users", url: "/users" },
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
      {sideMenu?.map(({ menuName, url }: { menuName: string; url: string }) => (
        <div
          className={`menu-icon-card ${activeTab === url ? "active-card" : ""}`}
          onClick={() => {
            setActiveTab(url);
            navigate(url);
          }}
        >
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
