import { MyVouchersRoot } from "./MyVouchers.styles";

const MyVouchers = () => {
  return (
    <MyVouchersRoot
      className="dashboard__widget dashboard__widget--my-vouchers"
      aria-labelledby="dashboard-my-vouchers-title"
    >
      <h2 id="dashboard-my-vouchers-title" className="dashboard__widget-title">
        나의 전표현황
      </h2>
    </MyVouchersRoot>
  );
};

export default MyVouchers;
