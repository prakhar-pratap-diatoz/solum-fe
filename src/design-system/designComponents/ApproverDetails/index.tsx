import { Avatar } from "@mui/material";
import { getNameInitials } from "./avtarColorPicker";
import "./style.scss";

const Approver = ({ name, email }: any) => {
  return (
    <div
      className="d-flex align-items-center"
      id="design-system-approver-details-component"
    >
      <Avatar
        style={{
          backgroundColor: getNameInitials(name?.trim()?.split(" ")[0][0])
            .colorForName,
          verticalAlign: "middle",
          width: 34,
          height: 34,
          position: "relative",
          marginRight: "8px",
          textTransform: "uppercase",
        }}
      >
        <span
          style={{
            fontSize: 17,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {name?.trim()?.split(" ")[0][0]}
        </span>
      </Avatar>
      <div>
        <p className="emp-name">{name}</p>
        <p className="emp-email">{email}</p>
      </div>
    </div>
  );
};

export default Approver;
