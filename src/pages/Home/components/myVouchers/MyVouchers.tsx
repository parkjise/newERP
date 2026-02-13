import Button from "@/components/ui/button";
import {
  MyVouchersRoot,
  MyVouchersStats,
  MyVouchersStat,
} from "./MyVouchers.styles";

const approvalList = [
  {
    id: 1,
    icon: "ri-clipboard-line",
    class: "total",
    text: "전체",
    count: 20,
  },
  {
    id: 2,
    icon: "ri-loader-4-line",
    class: "progress",
    text: "기안중",
    count: 3,
  },
  {
    id: 3,
    icon: "ri-hourglass-line",
    class: "pending-approval",
    text: "결재대기",
    count: 4,
  },
  {
    id: 4,
    icon: "ri-checkbox-circle-line",
    class: "completed",
    text: "완료",
    count: 10,
  },
];
const MyVouchers = () => {
  return (
    <MyVouchersRoot
      as="section"
      className="dashboard__widget dashboard__widget--my-vouchers"
      aria-labelledby="my-vouchers-title"
    >
      <header className="widget__head my-vouchers__header">
        <h2 id="my-vouchers-title" className="widget__title my-vouchers__title">
          나의 전표현황
        </h2>

        <div className="widget__actions my-vouchers__actions">
          <Button
            className="widget__refresh"
            icon={<i className="ri-restart-line" aria-hidden="true" />}
            aria-label="새로고침"
          />
        </div>
      </header>
      <div className="widget__body my-vouchers__body">
        <MyVouchersStats
          className="my-vouchers__stats"
          aria-label="전표 현황 요약"
        >
          {approvalList.map((list) => (
            <MyVouchersStat
              key={list.id}
              className={`my-vouchers__stat my-vouchers__${list.class}`}
            >
              <dt className="my-vouchers__label">
                <span
                  className={`approval-icon approval-icon--${list.class}`}
                  aria-hidden="true"
                >
                  <i className={list.icon}></i>
                </span>
                <span className="approval-text my-vouchers__text">
                  {list.text}
                </span>
              </dt>
              <dd className="approval-count my-vouchers__value">
                {list.count}
              </dd>
            </MyVouchersStat>
          ))}
        </MyVouchersStats>
      </div>
    </MyVouchersRoot>
  );
};

export default MyVouchers;
