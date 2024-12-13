import { MenuItemProps, MenuItem as MuiMenuItem } from "@mui/material";

import "./style.scss";

function MenuItem(props: MenuItemProps) {
  const { children, sx, ...restProps } = props;
  return (
    <MuiMenuItem id="custom_menu_item" sx={sx} {...restProps}>
      {children}
    </MuiMenuItem>
  );
}

export default MenuItem;
