import { ChangeEvent, useEffect, useState } from "react";
import { useGlobal } from "../../Providers/GlobalProvider";
import Buttons from "../../design-system/designComponents/Buttons/Button";
import { Avatar } from "@mui/material";
import Textfield from "../../design-system/designComponents/Textfield";
import "./style.scss";

const TopNav = () => {
  const { viewType, setViewType } = useGlobal();
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("viewType", viewType);
  }, [viewType]);

  return (
    <div id="top_nav_wrapper">
      <div className="nav-contents px-4">
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
          <Avatar>{viewType === "solum-view" ? "S" : "C"}</Avatar>
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
