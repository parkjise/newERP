import Header from "./Header";
import { NotificationsRoot, NotificationsBody } from "./Notifications.styles";
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
      <Header />
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
