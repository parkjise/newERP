export type SideBarProps = {
  className?: string;
};

export type MenuItem = {
  id: number;
  icon: string;
  text: string;
  href?: string;
};

/** 네비게이션 아이템 Props */
export interface SideBarNavItemProps {
  item: MenuItem;
}

/** 네비게이션 Props */
export interface SideBarNavProps {
  menuItems: MenuItem[];
}
