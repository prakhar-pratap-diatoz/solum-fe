import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { MouseEventHandler } from "react";
import styles from "./BreadCrumbs.module.scss";

interface LinksSet {
  name: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
  cursor?: boolean;
}

const BreadCrumbs = ({
  linksSet,
  activeColor,
  inActiveColor,
}: {
  linksSet: LinksSet[];
  activeColor?: string;
  inActiveColor?: string;
}) => {
  return (
    <Breadcrumbs
      classes={{ root: styles.breadcrumbs, separator: styles.separator }}
    >
      {linksSet?.map(({ href, onClick, name, cursor }, i) => (
        <Link
          key={i}
          style={{
            color: href
              ? activeColor ?? "var(--color-secondary)"
              : inActiveColor ?? "var(--color-secondary-text)",
            cursor: cursor ? "pointer" : "auto",
          }}
          className={href ? styles.activeLink : styles.inActiveLink}
          to={href ? href : "javascript:void(0)"}
          onClick={onClick ? onClick : undefined}
        >
          {name}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
