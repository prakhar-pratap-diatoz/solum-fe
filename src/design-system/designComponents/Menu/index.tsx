import { Menu as MuiMenu, MenuProps } from "@mui/material";

import "./style.scss";

function Menu(props: MenuProps) {
  const { children, ...restProps } = props;
  return (
    <MuiMenu id="custom_menu" {...restProps}>
      {children}
    </MuiMenu>
  );
}

export default Menu;
export { default as MenuItem } from "./MenuItem";
