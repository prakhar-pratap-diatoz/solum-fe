import { ReactNode } from "react";
import styles from "./header.module.scss";
import stylesv2 from "./header2.0.module.scss";
import { useMediaQuery } from "react-responsive";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Divider } from "@mui/material";
import { Button } from "antd";
import { Add } from "@mui/icons-material";

interface HeaderProps {
  heading: string | ReactNode;
  actions?: ReactNode | JSX.Element;
  viewDetails?: JSX.Element | ReactNode;
  breadCrumbValues?: ReactNode | JSX.Element;
  drawerHeader?: boolean;
  headingColor?: string;
}
interface HeaderV2Props {
  children?: any;
  id?: string;
  heading: string | ReactNode;
  fActions?: ReactNode | JSX.Element;
  status?: ReactNode | JSX.Element;
  arrowAction?: ReactNode | JSX.Element;
  dateAction?: ReactNode | JSX.Element;
  breadCrumbValues?: ReactNode | JSX.Element;
  menuAction?: ReactNode | JSX.Element;
  addAction?: ReactNode | JSX.Element;
  singleAction?: ReactNode | JSX.Element;
  extraAction?: ReactNode | JSX.Element;
  navigate?: any;
  onFloatBtnClick?: React.MouseEventHandler<HTMLElement>;
  headingColor?: string;
}

const Header = ({
  heading,
  actions,
  viewDetails,
  breadCrumbValues,
  drawerHeader,
  headingColor,
}: HeaderProps) => {
  return (
    <div
      className={styles.header}
      style={
        drawerHeader
          ? { marginBottom: "0px", padding: "5px 15px" }
          : { marginBottom: "20px" }
      }
    >
      <div>
        {breadCrumbValues}
        <div
          className={styles.heading}
          style={{
            color: headingColor ? headingColor : "var(--color-primary-text)",
          }}
        >
          {heading}
          <span className={styles.label}>{viewDetails}</span>
        </div>
      </div>
      <div>{actions}</div>
    </div>
  );
};

export default Header;

export const HeaderV2 = ({
  children,
  id,
  heading,
  arrowAction,
  status,
  fActions,
  dateAction,
  breadCrumbValues,
  menuAction,
  addAction,
  singleAction,
  extraAction,
  navigate,
  onFloatBtnClick,
  headingColor,
}: HeaderV2Props) => {
  const Rule = () => {
    return (
      <Divider
        orientation="vertical"
        variant="middle"
        style={{
          width: "1px",
          margin: "0 16px",
          height: "24px",
          background: "var(--color-primary-border)",
        }}
      />
    );
  };
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  const actions = fActions || extraAction || addAction || singleAction;
  const arrowActionDivider =
    (arrowAction && dateAction) ||
    (arrowAction && status) ||
    (arrowAction && actions) ||
    (arrowAction && menuAction);
  const dateActionDivider =
    (dateAction && status) ||
    (dateAction && actions) ||
    (dateAction && menuAction);
  const statusDivider = (status && actions) || (status && menuAction);

  return (
    <div className={stylesv2.mainlayout}>
      <div className={stylesv2.maincontainer}>
        <div className={stylesv2.header} id={id}>
          <div className={stylesv2.desktopheader}>
            <div className={stylesv2.headingwrap}>
              {navigate && isMobile && (
                <div onClick={navigate} className="d-flex align-items-center">
                  <ArrowBackIosIcon
                    style={{ width: 20, height: 18, color: headingColor }}
                  />
                </div>
              )}
              <div>
                <div>{breadCrumbValues}</div>
                <div
                  className={stylesv2.heading}
                  style={{
                    color: headingColor
                      ? headingColor
                      : "var(--color-primary-text)",
                  }}
                >
                  {heading}
                </div>
              </div>
            </div>
            {isMobile && arrowAction && <div>{arrowAction}</div>}
            {isMobile && singleAction && <div>{singleAction}</div>}
            {!isMobile && (
              <div className={stylesv2.actionwrap}>
                {arrowAction && (
                  <div className="arrowactionwrap">{arrowAction}</div>
                )}
                {arrowActionDivider && Rule()}
                {dateAction && (
                  <div className="datefilterwrap">{dateAction}</div>
                )}
                {dateActionDivider && Rule()}
                {status && <div className="statuswrap">{status}</div>}
                {statusDivider && Rule()}
                {menuAction && <div>{menuAction}</div>}
                {extraAction && <div>{extraAction}</div>}
                {addAction && <div>{addAction}</div>}
                {singleAction && <div>{singleAction}</div>}
                {fActions && <div>{fActions}</div>}
              </div>
            )}
            {isMobile && !arrowAction && menuAction && !extraAction && (
              <div className={stylesv2.mainsingleright}>
                {menuAction && (
                  <div className="menuactionwrap">{menuAction}</div>
                )}
              </div>
            )}
            {isMobile && !arrowAction && !menuAction && extraAction && (
              <div className={stylesv2.mainsingleright}>
                {extraAction && (
                  <div className="extraactionwrap">{extraAction}</div>
                )}
              </div>
            )}
            {isMobile && !arrowAction && menuAction && extraAction && (
              <div className={stylesv2.mainsingleright}>
                {menuAction && (
                  <div className="menuactionwrap">{menuAction}</div>
                )}
              </div>
            )}
          </div>
          {isMobile && (
            <div className={stylesv2.mobileheader}>
              {(dateAction || status) && (
                <div className={stylesv2.mobileleft}>
                  {dateAction && (
                    <div className="datefilterwrap">{dateAction}</div>
                  )}
                  {status && <div className="statuswrap">{status}</div>}
                </div>
              )}
              {arrowAction && (menuAction || extraAction) && (
                <div className={stylesv2.mobileright}>
                  {menuAction && (
                    <div className="menuactionwrap">{menuAction}</div>
                  )}
                  {extraAction && (
                    <div className="extraactionwrap">{extraAction}</div>
                  )}
                </div>
              )}
              {!arrowAction && extraAction && menuAction && (
                <div className={stylesv2.mobilesingleright}>
                  {extraAction && (
                    <div className="extraactionwrap">{extraAction}</div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        <div id={stylesv2.maincontent}>{children}</div>
        {isMobile && fActions && (
          <div className={stylesv2.footer}>
            <div className={stylesv2.footercontent}>
              <div>{fActions}</div>
            </div>
          </div>
        )}
        {isMobile && addAction && (
          <div id={stylesv2.floatingbutton}>
            <div className={stylesv2.floatwrap}>
              <Button
                className={stylesv2.floatingbtn}
                type="primary"
                shape="circle"
                icon={<Add sx={{ fontSize: "26px !important" }} />}
                size={"large"}
                onClick={onFloatBtnClick}
                style={{
                  background:
                    "transparent linear-gradient(134deg, #0080A5 0%, #3496B2 25%, #004053 100%) 0% 0% no-repeat padding-box",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
