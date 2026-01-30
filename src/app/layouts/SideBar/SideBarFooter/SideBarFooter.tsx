import { SideBarFooterRoot, CollapseButton } from "./SideBarFooter.styles";
const SideBarFooter = () => {
  return (
    <SideBarFooterRoot className="sidebar__footer">
      <CollapseButton
        variant="ghost"
        icon={<i className="ri-skip-left-line"></i>}
        className="sidebar__collapse-button"
        aria-expanded="true"
        aria-controls="sidebar-nav"
        ghost={false}
      />
    </SideBarFooterRoot>
  );
};

export default SideBarFooter;
