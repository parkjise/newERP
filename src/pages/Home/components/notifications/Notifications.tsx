import { NotificationsRoot } from "./Notifications.styles";

const Notifications = () => {
  return (
    <NotificationsRoot
      className="dashboard__widget dashboard__widget--notifications"
      aria-labelledby="dashboard-notifications-title"
    >
      <h2
        id="dashboard-notifications-title"
        className="dashboard__widget-title"
      >
        알림
      </h2>
    </NotificationsRoot>
  );
};

export default Notifications;
