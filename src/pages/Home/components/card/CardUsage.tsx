import { CardusageRoot, CardusageMain } from "./CardUsage.styles";
import Footer from "./Footer";
import Header from "@/pages/Home/components/header/Header";
// import { Form } from "antd";
// import { FormSelect } from "@/components";
const CardUsage = () => {
  return (
    <CardusageRoot
      className="dashboard__widget dashboard__widget--card-usage"
      aria-labelledby="dashboard-card-usage-title"
    >
      <Header
        title="카드 사용현황"
        className="widget__head card-usage__header"
        titleClassName="widget__title card-usage__title"
      >
        <div className="card-usage__actions">
          {/* <Form className="card-usage__filter-form">
          <FormSelect
            name="cardUsageSelect"
            label=""
            options={[
              { value: "all", label: "2026.02" },
              { value: "month", label: "2026.01" },
            ]}
            className="card-usage__filter"
          />
        </Form> */}
        </div>
      </Header>
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
