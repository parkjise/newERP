import { NoticeRoot } from "./Notice.styles";

const Notice = () => {
  return (
    <NoticeRoot
      className="dashboard__widget dashboard__widget--announcements"
      aria-labelledby="dashboard-announcements-title"
    >
      <h2
        id="dashboard-announcements-title"
        className="dashboard__widget-title"
      >
        공지사항
      </h2>
    </NoticeRoot>
  );
};

export default Notice;
