import { ChangeEvent, useEffect, useState } from "react";
import Buttons from "../../design-system/designComponents/Buttons/Button";
import { Avatar } from "@mui/material";
import Textfield from "../../design-system/designComponents/Textfield";
import "./style.scss";

const TopNav = () => {
  const [search, setSearch] = useState("");
  // const [viewType, setViewType] = useState("solum-view");
  const [viewType, setViewType] = useState(() => {
    return localStorage.getItem("viewType") || "solum-view";
  });

  useEffect(() => {
    localStorage.setItem("viewType", viewType);
  }, [viewType]);

  return (
    <div id="top_nav_wrapper">
      <div className="nav-contents">
        <div className="search-field">
          <Textfield
            value={search}
            onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
              setSearch(value)
            }
            placeholder="Search here..."
            type="search"
          />
        </div>

        <div
          className="d-flex align-items-center"
          style={{ columnGap: "10px" }}
        >
          <Buttons
            title="Solu-M View"
            onClick={() => setViewType("solum-view")}
          />
          <Buttons
            title="Customer View"
            variant="outlined"
            onClick={() => setViewType("customer-view")}
          />
        </div>
        <div className="profile">
          <div className="name">Upsilon System</div>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
