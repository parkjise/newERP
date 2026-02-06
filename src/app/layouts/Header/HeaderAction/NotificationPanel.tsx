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
const AlarmPanel = ({ clssName }: HeaderActions) => {
  return (
    <NotificationRoot className={clssName}>
      <NotificationHeader className="notification__header">
        <h2 className="notification__heading">알림</h2>
        <CommonTag text="5 읽지않음" color={"red"} />
      </NotificationHeader>
      <NotificationBody className="notification__body">
        <NotificationList className="notification__list" role="list">
          <li className="notification__item">
            <div className="notification__item-main">
              <span className="notification__icon" aria-hidden="true">
                <i className="ri-notification-badge-line"></i>
              </span>
              <div className="notification__content">
                <span className="notification__title">업데이트 알림</span>
                <span className="notification__date">1일전</span>
              </div>
            </div>
            <Button
              className="notification__close"
              icon={<i className="ri-close-line"></i>}
              variant="ghost"
              aria-label="알림 닫기"
            ></Button>
          </li>
        </NotificationList>
      </NotificationBody>
      <NotificationFooteer className="notification_footer">
        <Button size="sm" variant="ghost" />
      </NotificationFooteer>
    </NotificationRoot>
  );
};

export default AlarmPanel;
