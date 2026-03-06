import { SideBarFooterRoot, CollapseButton } from "./SideBarFooter.styles";
import type { SideBarFooterProps } from "@/app/layouts/SideBar/SideBar.types";
const SideBarFooter = ({ onClick }: SideBarFooterProps) => {
  return (
    <SideBarFooterRoot className="sidebar__footer">
      <CollapseButton
        variant="ghost"
        icon={<i className="ri-skip-left-line"></i>}
        className="sidebar__collapse-button"
        aria-expanded="true"
        aria-controls="sidebar-nav"
        ghost={false}
        onClick={onClick}
      />
    </SideBarFooterRoot>
  );
};

export default SideBarFooter;
