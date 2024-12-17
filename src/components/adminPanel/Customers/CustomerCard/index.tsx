import React from "react";
import { useNavigate } from "react-router-dom";
import CustomChips from "../../../../utils/CustomChips";
import { MilitaryTech } from "@mui/icons-material";
import "./style.scss";

const CustomerCard = () => {
  const navigate = useNavigate();
  return (
    <div
      className="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3"
      onClick={() => navigate(`1`)}
    >
      <div id="customer_card">
        <div className="chip-container">
          <CustomChips title="Active" color="#53B13C" />
        </div>
        <div className="customer-profile">
          <div className="logo">
            <img
              src="https://media.licdn.com/dms/image/v2/C510BAQFZzeJuOuukMg/company-logo_200_200/company-logo_200_200/0/1630587522457/diatoz_logo?e=2147483647&v=beta&t=_ZPJm5oTB4045hNKl4LrfLzXINMabmi7jJmQaCozbxI"
              alt="diatoz logo"
            />
          </div>

          <div className="customer-details">
            <CustomChips title="DSPL" color="#09263F" />
            <div className="customer-name">DIATOZ Solutions Pvt Ltd.</div>
          </div>
        </div>
        <div className="horizontal-border"></div>
        <div className="footer">
          <div className="badge">
            <MilitaryTech />
            <div className="count-compare">Active/Total License</div>
          </div>

          <div className="count">
            14/<span className="license-count">20</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
