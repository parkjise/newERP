import { type HeaderActions } from "@/app/layouts/Header/Header.type";
import {
  NotificationRoot,
  NotificationHeader,
  NotificationBody,
  NotificationFooteer,
  NotificationList,
} from "./NotificationPanel.styles";
import Button from "@/components/ui/button";
import { CommonTag } from "@/components/ui/tag";

type NotificationState = "update" | "notice";

interface Notification {
  id: number;
  title: string;
  date: string;
  state: NotificationState;
}

const notificationData: Notification[] = [
  {
    id: 1,
    title: "업데이트 알림",
    date: "1일전",
    state: "update",
  },
  {
    id: 2,
    title: "공지사항 알림",
    date: "1일전",
    state: "notice",
  },
];
const AlarmPanel = ({ className }: HeaderActions) => {
  const unreadCount = notificationData.length;
  return (
    <NotificationRoot className={className}>
      <NotificationHeader className="notification__header">
        <h2 className="notification__heading">알림</h2>
        <CommonTag text={`${unreadCount} 읽지않음`} color={"red"} />
      </NotificationHeader>
      <NotificationBody className="notification__body">
        <NotificationList className="notification__list" role="list">
          {notificationData.map((item) => (
            <li className="notification__item" key={item.id}>
              <div className="notification__item-main">
                <span
                  className={`notification__icon ${item.state}`}
                  aria-hidden="true"
                >
                  <i className="ri-notification-badge-line"></i>
                </span>
                <div className="notification__content">
                  <span className="notification__title">{item.title}</span>
                  <span className="notification__date">{item.date}</span>
                </div>
              </div>
              <Button
                className="notification__close"
                icon={<i className="ri-close-line"></i>}
                variant="ghost"
                aria-label="알림 닫기"
              ></Button>
            </li>
          ))}
        </NotificationList>
      </NotificationBody>
      <NotificationFooteer className="notification_footer">
        <Button size="sm" variant="ghost" />
      </NotificationFooteer>
    </NotificationRoot>
  );
};

export default AlarmPanel;
