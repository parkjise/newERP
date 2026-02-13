import Button from "@/components/ui/button";
import { NoticeHeader } from "./Notice.styles";

const Header = () => {
  return (
    <NoticeHeader className="widget__head notice__header">
      <h2 id="dashboard-notice-title" className="widget__title notice__widget">
        공지사항
      </h2>
      <div className="widget__actions notifications__actions">
        <Button
          className="widget__refresh"
          icon={<i className="ri-restart-line" aria-hidden="true" />}
          aria-label="새로고침"
        />
      </div>
    </NoticeHeader>
  );
};

export default Header;
