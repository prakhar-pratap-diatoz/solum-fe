import { CSSProperties, MouseEventHandler, ReactNode } from "react";
import Header from "./CardHeader";
import Footer from "./CardFooter";
import Body from "./CardBody";
import Skeleton from "./Skeleton";
import "./card.scss";

const Card = ({
  children,
  style,
  hoverable,
  onClick,
}: {
  children: ReactNode;
  style?: CSSProperties;
  hoverable?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      className={`e2e-design-card ${
        hoverable ? "hoverable-card" : "regular-card"
      }`}
      style={onClick ? { cursor: "pointer", ...style } : style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

Card.Header = Header;
Card.Footer = Footer;
Card.Body = Body;
Card.Skeleton = Skeleton;

export default Card;
