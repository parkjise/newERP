import Header from "@/pages/Home/components/header/Header";
import { NotificationsRoot, NotificationsBody } from "./Notifications.styles";
import Button from "@/components/ui/button";
const notificationsList = [
  {
    id: 1,
    text: "  반차신청서 결재가 완료되었습니다",
    time: "14:21",
    isUnread: true,
  },
  {
    id: 2,
    text: "협조 문서 도착",
    time: "14:21",
    isUnread: false,
  },
  {
    id: 3,
    text: "참조 문서 도착",
    time: "14:21",
    isUnread: false,
  },
];
const Notifications = () => {
  return (
    <NotificationsRoot
      className="dashboard__widget dashboard__widget--notifications"
      aria-labelledby="dashboard-notifications-title"
    >
      <Header
        title="알림"
        className="widget__head notifications__header"
        titleClassName="widget__title notifications__title"
        titleExtra={
          <p className="notifications__meta" aria-live="polite">
            <span className="notifications__meta-label">읽지않음</span>
            <span className="notifications__unread-count">1</span>
          </p>
        }
      >
        <div className="widget__actions notifications__actions">
          <Button
            className="widget__refresh"
            icon={<i className="ri-restart-line" aria-hidden="true" />}
            aria-label="새로고침"
          />
        </div>
      </Header>
      <NotificationsBody className="widget__body notifications__body">
        <ul className="notifications__list" aria-label="알림 목록">
          {notificationsList.map((list) => (
            <li
              key={list.id}
              className={`notifications__item ${list.isUnread ? "notifications__item--unread" : ""}`}
            >
              <p className="notifications__text">{list.text}</p>
              <time className="notifications__time" dateTime="14:31">
                {list.time}
              </time>
            </li>
          ))}
        </ul>
      </NotificationsBody>
    </NotificationsRoot>
  );
};

export default Notifications;
