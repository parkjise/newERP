import { CardusageRoot } from "./CardUsage.styles";

const CardUsage = () => {
  return (
    <CardusageRoot
      className="dashboard__widget dashboard__widget--card-usage"
      aria-labelledby="dashboard-card-usage-title"
    >
      <h2 id="dashboard-card-usage-title" className="dashboard__widget-title">
        카드 사용 현황
      </h2>
    </CardusageRoot>
  );
};

export default CardUsage;
