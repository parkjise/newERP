import { SalesOverviewRoot } from "./SalesOverview.styles";

const SalesOverview = () => {
  return (
    <SalesOverviewRoot
      className="dashboard__widget dashboard__widget--sales-overview"
      aria-labelledby="dashboard-sales-overview-title"
    >
      <h2
        id="dashboard-sales-overview-title"
        className="dashboard__widget-title"
      >
        매출현황
      </h2>
    </SalesOverviewRoot>
  );
};

export default SalesOverview;
