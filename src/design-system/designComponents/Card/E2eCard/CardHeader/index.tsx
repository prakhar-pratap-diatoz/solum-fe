import { CSSProperties, ReactNode } from "react";
import "../card.scss";

type IE2eCardHeaderProps = {
  title: string | ReactNode;
  action?: ReactNode;
  style?: CSSProperties;
};

function E2eCardHeader(props: IE2eCardHeaderProps) {
  return (
    <div id="e2e_design_card_header" style={props.style}>
      <div>{props.title}</div>
      {props.hasOwnProperty("action") ? <div>{props.action}</div> : null}
    </div>
  );
}

export default E2eCardHeader;
