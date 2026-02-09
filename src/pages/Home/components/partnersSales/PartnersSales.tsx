import { PartnersSalesRoot } from "./PartnersSales.styles";

const ParthnersSales = () => {
  return (
    <PartnersSalesRoot
      className="dashboard__widget dashboard__widget--top-partners-sales"
      aria-labelledby="dashboard-top-partners-sales-title"
    >
      <h2
        id="dashboard-top-partners-sales-title"
        className="dashboard__widget-title"
      >
        TOP 5 거래처별 매출
      </h2>
    </PartnersSalesRoot>
  );
};

export default ParthnersSales;
