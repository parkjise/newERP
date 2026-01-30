import { HeaderStyles } from "@/app/layouts/Header/Header.styles";
import { type HeaderProps } from "@/app/layouts/Header/Header.type";
import HeaderLogo from "@/app/layouts/Header/HeaderLogo";
import HeaderSearch from "@/app/layouts/Header/HeaderSearch";
import HeaderActions from "@/app/layouts/Header/HeaderActions";

const Header = ({ className }: HeaderProps) => {
  return (
    <>
      <HeaderStyles className={className}>
        <div className="header__main">
          <HeaderLogo />
          <HeaderSearch />
        </div>
        <HeaderActions />
      </HeaderStyles>
    </>
  );
};

export default Header;
