// import { Form } from "antd";
// import { FormSelect } from "@/components";
import { CardusageHeader } from "./Header.styles";

const Header = () => {
  return (
    <CardusageHeader className="widget__head card-usage__header">
      <h2 className=" widget__title card-usage__title">카드 사용 현황</h2>
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
    </CardusageHeader>
  );
};

export default Header;
