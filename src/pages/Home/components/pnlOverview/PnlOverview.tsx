import { PnlOverviewRoot } from "./PnlOverview.styles";

const PnlOverview = () => {
  return (
    <PnlOverviewRoot
      className="dashboard__widget dashboard__widget--pnl-overview"
      aria-labelledby="dashboard-pnl-overview-title"
    >
      <h2 id="dashboard-pnl-overview-title" className="dashboard__widget-title">
        손익현황
      </h2>
    </PnlOverviewRoot>
  );
};

export default PnlOverview;
