import Button from "@/components/ui/button";

const Header = () => {
  return (
    <header className="widget__head erp-approval__header">
      <h2
        id="dashboard-notice-title"
        className="widget__title erp-approval__widget"
      >
        ERP 결재현황
      </h2>
      <div className="widget__actions erp-approval__actions">
        <Button
          className="widget__refresh"
          icon={<i className="ri-restart-line" aria-hidden="true" />}
          aria-label="새로고침"
        />
      </div>
    </header>
  );
};

export default Header;
