import { ErpApprovalRoot } from "./ErpApproval.styles";
import Header from "@/pages/Home/components/header/Header";
import Button from "@/components/ui/button";
const erpApprovalList = [
  {
    id: 1,
    icon: "ri-clipboard-line",
    class: "total",
    text: "전체 상신 결재",
    count: 58,
  },
  {
    id: 2,
    icon: "ri-loader-4-line",
    class: "progress",
    text: "진행중",
    count: 17,
  },
  {
    id: 3,
    icon: "ri-pause-circle-line",
    class: "hold",
    text: "보류",
    count: 2,
  },
  {
    id: 4,
    icon: "ri-file-close-line",
    class: "rejected",
    text: "반려",
    count: 2,
  },
  {
    id: 5,
    icon: "ri-checkbox-circle-line",
    class: "completed",
    text: "완료",
    count: 19,
  },
  {
    id: 6,
    icon: "ri-hourglass-line",
    class: "pending-approval",
    text: "결재대기",
    count: 2,
  },
];
const ErpApproval = () => {
  return (
    <ErpApprovalRoot
      className="dashboard__widget dashboard__widget--erp-approval"
      aria-labelledby="dashboard-erp-approval-title"
    >
      <Header
        title="ERP 결재현황"
        className="widget__head erp-approval__header"
        titleClassName="widget__title erp-approval__widget"
      >
        <div className="widget__actions erp-approval__actions">
          <Button
            className="widget__refresh"
            icon={<i className="ri-restart-line" aria-hidden="true" />}
            aria-label="새로고침"
          />
        </div>
      </Header>
      <div className="widget__body erp-approval__body">
        {erpApprovalList.map((list) => (
          <dl className="erp-approval__list" key={list.id}>
            <div className="erp-approval__item">
              <dt className="approval-text erp-approval__term">{list.text}</dt>
              <dd className="erp-approval__desc">
                <span
                  className={`approval-icon approval-icon--${list.class}`}
                  aria-hidden="true"
                >
                  <i className={list.icon}></i>
                </span>
                <span
                  className="approval-count erp-approval__count"
                  aria-label="건수"
                >
                  {list.count}
                </span>
              </dd>
            </div>
          </dl>
        ))}
      </div>
    </ErpApprovalRoot>
  );
};

export default ErpApproval;
