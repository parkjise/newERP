import {
  SideBarRoot,
  SideBarInner,
} from "@/app/layouts/SideBar/SideBar.styles";
import { MENU_ITEMS } from "@/app/layouts/SideBar/SideBar.config";
import type { SideBarProps } from "@/app/layouts/SideBar/SideBar.types";

import SideBarNav from "@/app/layouts/SideBar/SideBarNav/SideBarNav";
import SideBarHeader from "@/app/layouts/SideBar/SideBarHeader/SideBarHeader";
import SideBarFooter from "@/app/layouts/SideBar/SideBarFooter/SideBarFooter";
const SideBar = ({ className }: SideBarProps) => {
  return (
    <SideBarRoot className={`sidebar ${className ?? ""}`} as="aside">
      <SideBarInner className="sidebar__inner">
        {/* 즐겨찾기 */}
        <SideBarHeader />
        {/* 메뉴 리스트 */}
        <SideBarNav menuItems={MENU_ITEMS} />
      </SideBarInner>
      {/* 접기 영역 */}
      <SideBarFooter />
    </SideBarRoot>
  );
};

export default SideBar;
