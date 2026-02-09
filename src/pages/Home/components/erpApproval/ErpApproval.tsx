import { ErpApprovalRoot } from "./ErpApproval.styles";

const ErpApproval = () => {
  return (
    <ErpApprovalRoot
      className="dashboard__widget dashboard__widget--erp-approval"
      aria-labelledby="dashboard-erp-approval-title"
    >
      <h2 id="dashboard-erp-approval-title" className="dashboard__widget-title">
        ERP 결재현황
      </h2>
    </ErpApprovalRoot>
  );
};

export default ErpApproval;
