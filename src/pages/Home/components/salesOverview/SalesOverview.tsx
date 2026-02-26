import Header from "@/pages/Home/components/header/Header";
import { SalesOverviewRoot } from "./SalesOverview.styles";
import chart from "@/assets/images/sales-chart.svg";
const listData = [
  {
    id: 1,
    product: "A 제품",
    price: "75.6억",
  },
  {
    id: 2,
    product: "B 제품",
    price: "75.6억",
  },
  {
    id: 3,
    product: "C 제품",
    price: "75.6억",
  },
  {
    id: 4,
    product: "D 제품",
    price: "75.6억",
  },
];

const SalesOverview = () => {
  return (
    <SalesOverviewRoot
      className="dashboard__widget dashboard__widget--sales-overview"
      aria-labelledby="dashboard-sales-overview-title"
    >
      <Header
        title="매출현황"
        className="widget__head sales-overview__header"
        titleClassName="widget__title sales-overview-title"
      >
        <div className="sales-overview__actions">
          {/* <Form className="sales-overview__filters">
          <FormSelect
            name="salesOverviewselect"
            label=""
            defaultValue="올해"
            options={[
              { value: "all", label: "2026.02" },
              { value: "month", label: "2026.01" },
            ]}
            className="sales-overview__filter"
          />
        </Form> */}
        </div>
      </Header>
      <div className="widget__body sales-overview__body">
        <ol className="sales-overview__list">
          {listData.map((list) => (
            <li className="sales-overview__item" key={list.id}>
              <dl className="sales-overview__metric">
                <dt className="sales-overview__label">{list.product}</dt>
                <dd className="sales-overview__value">{list.price}</dd>
              </dl>
            </li>
          ))}
        </ol>
        <figure className="sales-overview__chart">
          <img
            className="sales-overview__chart-image"
            src={chart}
            alt="매출 현황 차트"
          />
        </figure>
      </div>
    </SalesOverviewRoot>
  );
};

export default SalesOverview;
