// import { Form } from "antd";
// import { FormSelect } from "@/components";
import { PartnersSalesHeader } from "./Header.styles";

const Header = () => {
  return (
    <PartnersSalesHeader className="widget__head top-partners-sales__header">
      <h2 className="widget__title top-partners-sales-title">
        TOP 5 거래처별 매출
      </h2>
      <div className="top-partners-sales__actions">
        {/* <Form className="top-partners-sales__filter-form">
          <FormSelect
            name="topPartnersSaleselect"
            label=""
            options={[
              { value: "all", label: "2026.02" },
              { value: "month", label: "2026.01" },
            ]}
            className="top-partners-sales__filter"
          />
          <FormSelect
            name="topPartnersSaleselect"
            label=""
            options={[
              { value: "all", label: "2026.02" },
              { value: "month", label: "2026.01" },
            ]}
            className="top-partners-sales__filter"
          />
        </Form> */}
      </div>
    </PartnersSalesHeader>
  );
};

export default Header;
