import { CardusageRoot, CardusageMain } from "./CardUsage.styles";
import Footer from "./Footer";
import Header from "./Header";

const CardUsage = () => {
  return (
    <CardusageRoot
      className="dashboard__widget dashboard__widget--card-usage"
      aria-labelledby="dashboard-card-usage-title"
    >
      <Header />
      <CardusageMain className="card-usage__content">
        <dl className="card-usage__summary">
          <div className="card-usage__summary-item">
            <dt className="card-usage__summary-label">이번달 총 사용량</dt>
            <dd
              className="card-usage__summary-value"
              aria-label="이번달 총 사용량 112,250,000원"
            >
              112,250,000
            </dd>
          </div>
        </dl>
      </CardusageMain>
      <Footer />
    </CardusageRoot>
  );
};

export default CardUsage;
