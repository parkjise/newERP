import type { ReactNode } from "react";

type BadgeProps = {
  icon: ReactNode;
  count?: number;
  className?: string;
};

const IconWithBadge = ({ icon, count, className }: BadgeProps) => {
  return (
    <span className={`header__icon-wrapper ${className || ""}`}>
      {icon}
      {count !== undefined && <span className="header__badge">{count}</span>}
    </span>
  );
};

export default IconWithBadge;

/*
  <span className={`header__icon-wrapper ${className || ""}`}>
  className이 있으면 추가로 붙임 없으면 "" (아무 것도 안 붙임)
*/
