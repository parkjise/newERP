import type { SideBarNavItemProps } from "@/app/layouts/SideBar/SideBar.types";
import { NavItem, NavLink, NavIcon, NavText } from "./SideBarNav.styles";
const SideBarNavItem = ({ item }: SideBarNavItemProps) => {
  return (
    <NavItem className="sidebar__nav-item" key={item.id}>
      <NavLink href="" className={"sidebar__nav-link"}>
        <NavIcon className="sidebar__nav-icon">
          <i className={item.icon}></i>
        </NavIcon>
        <NavText className="sidebar__nav-text">{item.text}</NavText>
      </NavLink>
    </NavItem>
  );
};

export default SideBarNavItem;
