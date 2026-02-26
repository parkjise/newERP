import Header from "@/pages/Home/components/header/Header";
import { PnlOverviewRoot } from "./PnlOverview.styles";
import chart from "@/assets/images/pnl-chart.svg";
const PnlOverview = () => {
  return (
    <PnlOverviewRoot
      className="dashboard__widget dashboard__widget--pnl-overview"
      aria-labelledby="dashboard-pnl-overview-title"
    >
      <Header
        title="손익현황"
        className="widget__head pnl-overview__heade"
        titleClassName="widget__title pnl-overview-title"
      >
        <div className="pnl-overview__actions">
          {/* <Form className="pnl-overview__filters">
          <FormSelect
            name="pnlOverviewselect"
            label=""
            defaultValue="2026.02"
            options={[
              { value: "all", label: "2026.02" },
              { value: "month", label: "2026.01" },
            ]}
            className="pnl-overview__filter"
          />
        </Form> */}
        </div>
      </Header>
      <div className="pnl-overview__content">
        <ol className="pnl-overview__list">
          <li className="pnl-overview__item">
            <dl className="pnl-overview__metric">
              <dt className="pnl-overview__label">매출원가</dt>
              <dd className="pnl-overview__value">
                재료비 <span className="pnl-overview__amount">8억</span>, 노무비{" "}
                <span className="pnl-overview__amount">2억</span>, 제조경비
                <span className="pnl-overview__amount"> 6.2억</span>
              </dd>
            </dl>
          </li>
        </ol>

        <figure className="pnl-overview__chart">
          <img
            className="pnl-overview__chart-image"
            src={chart}
            alt="손익 현황 차트"
          />
        </figure>
      </div>
    </PnlOverviewRoot>
  );
};

export default PnlOverview;
