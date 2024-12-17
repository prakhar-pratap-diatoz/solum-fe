import React, { ReactNode } from "react";
import SideNav from "../SideNav";
import TopNav from "../TopNav";
import "./style.scss";

const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div id="main_layout_container">
      <SideNav />
      <div>
        <TopNav />
        <div id="main_container_wrapper" className="px-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
