import { useState } from "react";
import Header from "@/pages/Home/components/header/Header";
import { PartnersSalesRoot } from "./PartnersSales.styles";
import { CommonSelect } from "@/components/ui/select/Select";
const items = [
  { name: "엔비디아", amount: 225_214_125_232, ratio: 100, isTop: true },
  { name: "삼성전자", amount: 123_214_125_232, ratio: 80, isTop: false },
  { name: "토스", amount: 90_214_125_232, ratio: 60, isTop: false },
  { name: "SK 하이닉스", amount: 60_214_125_232, ratio: 40, isTop: false },
  { name: "현대자동차", amount: 20_214_125_232, ratio: 20, isTop: false },
];

const ParthnersSales = () => {
  // const [isTop, setIsTop] = useState();
  const [status, setStatus] = useState<
    "pending" | "approved" | "rejected" | undefined
  >(undefined);

  return (
    <PartnersSalesRoot className="dashboard__widget dashboard__widget--top-partners-sales">
      <Header
        title="TOP 5 거래처별 매출"
        className="widget__head top-partners-sales__header"
        titleClassName="widget__title top-partners-sales-title"
      >
        <div className="top-partners-sales__actions">
          <CommonSelect
            label=""
            placeholder="선택"
            options={[
              { label: "대기", value: "pending" },
              { label: "승인", value: "approved" },
              { label: "반려", value: "rejected" },
            ]}
            value={status}
            // defaultValue={"dfdf"}
            onChange={(v) => setStatus(v)}
            style={{ width: 80 }}
          />
        </div>
      </Header>
      <div className="widget__body top-partners-sales__body">
        <ol className="top-partners-sales__list">
          {items.map((item) => (
            <li key={item.name} className="top-partners-sales__item">
              <div className="top-partners-sales__row">
                <span className="top-partners-sales__partner">{item.name}</span>
                <div className="top-partners-sales__metrics">
                  <div className="top-partners-sales__bar">
                    <span
                      className={`top-partners-sales__bar-fill ${item.isTop ? "top-partners-sales__bar-fill--top" : ""}`}
                      style={{ width: `${item.ratio}%` }}
                    />
                  </div>
                  <span className="top-partners-sales__amount">
                    {item.amount.toLocaleString()}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </PartnersSalesRoot>
  );
};

export default ParthnersSales;
