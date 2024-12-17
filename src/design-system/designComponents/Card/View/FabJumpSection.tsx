import { FC, Fragment, ReactNode, useEffect, useState } from "react";
import { Fab as MuiFab, Tooltip } from "@mui/material";
import { Popover } from "antd";
import { Button } from "../../index";
import { ArrowUpIcon, LinkDirectIcon } from "../../../assets/common";

const FabJumpSection: FC<{
  list: { title: string; id: string; icon: ReactNode }[];
}> = ({ list }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <Fragment>
      <div id="e2e_design_view_detail_card">
        <div className="navigate-buttons">
          <Popover
            overlayClassName="e2e-design-pop-over"
            color="var(--color-body-bg-white)"
            content={list.map((section: any, index: number) => (
              <Button
                key={index}
                className="mb-1"
                onClick={(e) => {
                  const targetSection = document.getElementById(section.id);
                  targetSection?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                title={
                  <div className="d-flex align-items-center">
                    <span className="mr-2">{section.icon}</span>
                    <div>{section.title}</div>
                  </div>
                }
                sx={{
                  width: "-webkit-fill-available",
                  justifyContent: "flex-start",
                }}
                filterButton
              />
            ))}
            placement="top"
            trigger="hover"
            getPopupContainer={(triger: any) => triger.parentElement}
          >
            <div>
              <Button
                title="Jump to section"
                filterButton
                textColor="var(--color-secondary)"
                startIcon={<LinkDirectIcon />}
                disabled
              />
            </div>
          </Popover>
          {showTopBtn ? (
            <Tooltip title="Scroll to top">
              <MuiFab
                sx={{ background: "var(--color-body-bg-white)" }}
                size="small"
                className="ml-3"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <ArrowUpIcon />
              </MuiFab>
            </Tooltip>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

export default FabJumpSection;
