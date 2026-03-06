import { useNotificationStore } from "@/stores/useNotificationStore";
import { type NotificationProps } from "@/app/layouts/Header/Header.type";
import {
  NotificationRoot,
  NotificationHeader,
  NotificationBody,
  NotificationFooteer,
  NotificationList,
} from "./NotificationPanel.styles";
import Button from "@/components/ui/button";
import { CommonTag } from "@/components/ui/tag";
const NotificationPanel = ({ className }: NotificationProps) => {
  const { notifications, removeNotification, markAsRead, markAllAsRead } =
    useNotificationStore();

  // ✅ 읽지 않은 갯수 직관적 계산
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <NotificationRoot className={className}>
      <NotificationHeader className="notification__header">
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <h2 className="notification__heading">알림</h2>
          <CommonTag text={`${unreadCount} 읽지않음`} color={"red"} />
        </div>
        <Button size="sm" variant="text" onClick={markAllAsRead}>
          모두 읽음
        </Button>
      </NotificationHeader>
      <NotificationBody className="notification__body">
        <NotificationList className="notification__list" role="list">
          {notifications.map((item) => (
            <li
              className={`notification__item ${item.isRead ? "notification__item--read" : ""}`}
              key={item.id}
              onClick={() => markAsRead(item.id)}
            >
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
                onClick={(e) => {
                  e.stopPropagation(); // 삭제 버튼 클릭 시 읽음 이벤트 방지
                  removeNotification(item.id);
                }}
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

export default NotificationPanel;
