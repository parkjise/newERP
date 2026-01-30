import type { SideBarNavProps } from "@/app/layouts/SideBar/SideBar.types";
import SideBarNavItem from "@/app/layouts/SideBar/SideBarNav/SideBarNavItem";
import { SideBarNavRoot, NavList } from "./SideBarNav.styles";
const SideBarNav = ({ menuItems }: SideBarNavProps) => {
  // const [activeId, setActiveId] = useState<number>();

  return (
    <SideBarNavRoot className="sidebar__nav" aria-label="메뉴">
      <NavList className="sidebar__nav-list">
        {menuItems.map((item) => (
          <SideBarNavItem key={item.id} item={item} />
        ))}
      </NavList>
    </SideBarNavRoot>
  );
};

export default SideBarNav;
