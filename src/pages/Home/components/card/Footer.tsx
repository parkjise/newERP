import { CardusageFooter } from "./Footer.styles";
const Footer = () => {
  return (
    <CardusageFooter className="card-usage__footer" aria-label="최근 사용 내역">
      <dl className="card-usage__last-usage">
        <div className="card-usage__last-usage-row">
          <dt className="card-usage__last-usage-label">마지막 사용 내역</dt>
          <dd className="card-usage__last-usage-value">
            <time dateTime="2026-02-03T18:57:00+09:00">
              2026년 02월 03일 18:57
            </time>
          </dd>
        </div>

        <div className="card-usage__last-usage-row">
          <dt className="card-usage__merchant">스타벅스</dt>
          <dd className="card-usage__amount" aria-label="45,000원">
            45,000
          </dd>
        </div>
      </dl>
    </CardusageFooter>
  );
};

export default Footer;
