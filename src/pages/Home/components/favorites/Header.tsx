import Button from "@/components/ui/button";

const Header = () => {
  return (
    <header className="widget__head favorites__header">
      <h2
        id="dashboard-favorites-title"
        className="favorites__title widget__title"
      >
        즐겨찾기
      </h2>
      <Button
        className="widget__refresh"
        icon={<i className="ri-restart-line" aria-hidden="true" />}
        aria-label="새로고침"
      />
    </header>
  );
};

export default Header;
