import { Avatar } from "antd";
import { alphabetArr, randomColors, getNameInitials } from "./staticData";

function AssigneeRenderOptions({
  user,
  avatarSize,
  fontSize,
  isPipeRemoved,
}: any) {
  const slicedAlph = user?.firstName
    ? user?.firstName?.split("")[0].toUpperCase()
    : user?.email?.split("")[0].toUpperCase();
  let lower = slicedAlph?.toLowerCase();
  const colorForName = randomColors[alphabetArr.indexOf(lower) % 6];

  return (
    <div className="d-flex flex-row align-items-center">
      <span className="mr-2">
        <Avatar
          src={user?.profilePicUrl}
          style={{
            backgroundColor: colorForName,
            height: avatarSize ? avatarSize : 25,
            width: avatarSize ? avatarSize : 25,
            fontSize: fontSize ? fontSize : "14px",
          }}
          className="avtarIcon"
        >
          {slicedAlph}
        </Avatar>
      </span>
      <span className="mr-1" style={{ minWidth: 30 }}>
        {user?.firstName} {isPipeRemoved ? "" : "|"} {user?.email}
      </span>
    </div>
  );
}

AssigneeRenderOptions.getNameInitials = getNameInitials;
AssigneeRenderOptions.alphabetArr = alphabetArr;
AssigneeRenderOptions.randomColors = randomColors;

export default AssigneeRenderOptions;
