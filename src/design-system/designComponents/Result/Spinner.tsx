// import { CircularProgress } from "@mui/material";

// export const Spinner = ({ color }: { color?: string }) => {
//   return (
//     <div className="d-flex justify-content-center h-100 align-items-center">
//       <CircularProgress style={{ color: color ? color : "#DE373A" }} />
//     </div>
//   );
// };

import { makeStyles } from "@mui/styles";
import { CircularProgress } from "@mui/material";

const useStyles = makeStyles(() => ({
  circle: {
    stroke: "url(#linearColors)",
  },
}));
const Spinner = ({ color, size }: { color?: string; size?: number }) => {
  const classes = useStyles({});

  return (
    <>
      {color ? (
        <CircularProgress
          style={{ color: color ? color : "#DE373A" }}
          size={size}
        />
      ) : (
        <div className="d-flex justify-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0"
            height="0"
            viewBox="0 0 0 0"
          >
            <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
              <stop offset="20%" stopColor="#39F" />
              <stop offset="90%" stopColor="#F3F" />
            </linearGradient>
          </svg>
          <CircularProgress
            thickness={4}
            classes={{ circle: classes.circle }}
          />
        </div>
      )}
    </>
  );
};

export default Spinner;
