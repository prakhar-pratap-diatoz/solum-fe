import { ChangeEvent, useState } from "react";
import { Avatar } from "@mui/material";
import Textfield from "../../design-system/designComponents/Textfield";
import "./style.scss";

const TopNav = () => {
  const [search, setSearch] = useState("");
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
        <div className="profile">
          <div className="name">Upsilon System</div>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
