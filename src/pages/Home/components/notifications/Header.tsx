import Button from "@/components/ui/button";
import { NotificationsHeader } from "./Notifications.styles";

const Header = () => {
  return (
    <NotificationsHeader className="widget__head notifications__header">
      <div className="notifications__heading">
        <h2
          id="notifications-title"
          className="widget__title notifications__title"
        >
          알림
        </h2>
        <p className="notifications__meta" aria-live="polite">
          <span className="notifications__meta-label">읽지않음</span>
          <span className="notifications__unread-count">1</span>
        </p>
      </div>
      <div className="widget__actions notifications__actions">
        <Button
          className="widget__refresh"
          icon={<i className="ri-restart-line" aria-hidden="true" />}
          aria-label="새로고침"
        />
      </div>
    </NotificationsHeader>
  );
};

export default Header;
