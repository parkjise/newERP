import Header from "./Header";
import { NoticeRoot, NoticeBody } from "./Notice.styles";
const noticelList = [
  {
    id: 1,
    text: "(총무)보조보일러 가스 사용량 통신비_'25년10월",
    date: "2025.10.31",
    isNew: true,
  },
  {
    id: 2,
    text: "(총무)보조보일러 가스 사용량 통신비_'25년10월",
    date: "2025.10.31",
    isNew: false,
  },
];
const Notice = () => {
  return (
    <NoticeRoot
      className="dashboard__widget dashboard__widget--notice"
      aria-labelledby="dashboard-notice-title"
    >
      <Header />
      <NoticeBody className="widget__body notice__body">
        <ul className="notice__list" aria-label="공지사항 목록">
          {noticelList.map((list) => (
            <li
              className={`notice__item ${list.isNew ? "notice__item--new" : ""}`}
              key={list.id}
            >
              <p className="notice__text">
                <a href="#" className="notice__text--link">
                  {list.text}
                </a>
              </p>
              <span className="notice__date"> {list.date}​</span>
            </li>
          ))}
        </ul>
      </NoticeBody>
    </NoticeRoot>
  );
};

export default Notice;
