import { ChangeEventHandler, ReactElement } from "react";
import { Tabs as MuiTabs, Tab, tabsClasses } from "@mui/material";
import styles from "./tabs.module.scss";

interface TabsProps {
  TabsData: {
    label: string;
    value?: string | number;
    visible?: boolean;
    icon?: ReactElement;
  }[];
  onChange:
    | Function
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | any;
  value: string | number;
  tabDisabled?: boolean;
  iconPosition?: "bottom" | "end" | "start" | "top";
  activeColor?: string;
  inActiveColor?: string;
  orientation?: "horizontal" | "vertical";
}

const E2eTabs = (
  {
    TabsData,
    onChange,
    value,
    tabDisabled,
    iconPosition,
    activeColor,
    inActiveColor,
    orientation,
  }: TabsProps,
  i: number
) => {
  return (
    <>
      <MuiTabs
        orientation={orientation ? orientation : "horizontal"}
        value={value}
        onChange={onChange}
        className={styles.tabs}
        classes={{ indicator: styles.indicator }}
        key={i}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
            "&.MuiTabScrollButton-root": { width: "24px" },
          },
          ".MuiTab-root": {
            color: inActiveColor ? inActiveColor : "var(--color-primary-text) ",
            "&.Mui-disabled": {
              opacity: 0.3,
              cusrsor: "not-allowed !important",
            },
          },
          ".Mui-selected": {
            color: activeColor
              ? activeColor + " !important"
              : "var(--color-secondary-text) !important",
            opacity: "1 !important",
          },
        }}
      >
        {TabsData?.map((data: any, index: number) => {
          const isVisible = data.hasOwnProperty("visible")
            ? data.visible
            : true;
          return (
            isVisible && (
              <Tab
                key={index}
                icon={data.icon ? data.icon : undefined}
                iconPosition={iconPosition ? iconPosition : undefined}
                label={data?.label}
                value={data?.value ? data.value : index}
                disabled={tabDisabled}
                classes={{ root: styles.tab, selected: styles.tabSelected }}
              />
            )
          );
        })}
      </MuiTabs>
    </>
  );
};

export default E2eTabs;
