import type { HeaderProps } from "@/pages/Home/components/header/types";
import { HeaderRoot } from "./Header.styles";
const Header = ({
  className,
  children,
  title,
  titleClassName,
  titleExtra,
}: HeaderProps) => {
  return (
    <HeaderRoot className={className}>
      <div className="widget__heading">
        <h2 className={titleClassName}>{title}</h2>
        {titleExtra}
      </div>
      {children}
    </HeaderRoot>
  );
};

export default Header;
