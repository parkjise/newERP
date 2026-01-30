import logoImage from "@/assets/images/logo.png";

const HeaderLogo = () => {
  return (
    <h1 className="header__logo">
      <img src={logoImage} alt="logo" />
    </h1>
  );
};

export default HeaderLogo;
