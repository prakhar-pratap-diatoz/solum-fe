import { Avatar, TextField } from "@mui/material";
import "./style.scss";

const TopNav = () => {
  return (
    <div id="top_nav_wrapper">
      <div className="nav-contents">
        <div className="search-field">
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            placeholder="Search here..."
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
