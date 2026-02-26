import { useEffect, useRef, useState } from "react";
import { useThemeStore } from "@/stores/themeStore";
import { useMemo } from "react";
import {
  createHeaderButtons,
  notificationData,
} from "@/app/layouts/Header/Header.config";
import type { NotificationItem } from "@/app/layouts/Header/Header.type";
import IconWithBadge from "@/components/ui/badge/IconWithBadge";
import { ThemeColorModal } from "@/components/ui/modal/ThemeColorModal";
import { HeaderUtilsRoot, HeaderButton } from "./HeaderActions.styles";
import Notification from "./NotificationPanel";
const HeaderActions = () => {
  // 알림 숫자 변수
  const [notifications, setNotifications] =
    useState<NotificationItem[]>(notificationData);

  const unreadCount = notifications.length;
  const toggleMode = useThemeStore((s) => s.toggleMode);
  const mode = useThemeStore((s) => s.mode);
  // 테마 컬러 모달 상태
  const [showColorModal, setShowColorModal] = useState(false);

  // 알람 모달 상태
  const [showNotifications, setShowNotifications] = useState("");

  // HeaderActions 전체 영역 참조
  const containerRef = useRef<HTMLDivElement>(null);

  // 바깥 클릭 감지
  useEffect(() => {
    if (showNotifications !== "active") return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowNotifications("");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showNotifications]);

  // setting 버튼 클릭 핸들러
  const handleSettingClick = () => {
    setShowColorModal(true);
  };

  // alram 버튼 클릭 핸들러
  const handleNotificationsClick = () => {
    setShowNotifications((prev) => (prev === "active" ? "" : "active"));
  };

  // useMemo로 불필요한 재생성 방지
  const headerButtons = useMemo(
    () =>
      createHeaderButtons(
        mode,
        toggleMode,
        handleSettingClick,
        handleNotificationsClick,
        unreadCount,
      ),
    [mode, toggleMode, unreadCount],
  );
  return (
    <>
      <HeaderUtilsRoot className="header__utils" ref={containerRef}>
        {headerButtons.map(({ id, modifier, icon, badge, label, onClick }) => (
          <HeaderButton
            key={id}
            variant="primary"
            shape="round"
            aria-label={label}
            icon={badge ? <IconWithBadge icon={icon} count={badge} /> : icon}
            onClick={onClick}
            className={`header__button header__button--${modifier}`}
          />
        ))}
        <Notification
          className={showNotifications}
          notifications={notifications}
          setNotifications={setNotifications}
        />
      </HeaderUtilsRoot>
      <ThemeColorModal
        open={showColorModal}
        onClose={() => setShowColorModal(false)}
      />
    </>
  );
};

export default HeaderActions;
