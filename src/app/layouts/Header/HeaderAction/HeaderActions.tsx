import { useState } from "react";
import { useThemeStore } from "@/stores/themeStore";
import { useMemo } from "react";
import { createHeaderButtons } from "@/app/layouts/Header/Header.config";
import IconWithBadge from "@/components/ui/badge/IconWithBadge";
import { ThemeColorModal } from "@/components/ui/modal/ThemeColorModal";
import { HeaderUtilsRoot, HeaderButton } from "./HeaderActions.styles";
import AlarmPanel from "./NotificationPanel";
const HeaderActions = () => {
  const toggleMode = useThemeStore((s) => s.toggleMode);
  const mode = useThemeStore((s) => s.mode);
  // 테마 컬러 모달 상태
  const [showColorModal, setShowColorModal] = useState(false);

  // 알람 모달 상태
  const [showAlram, setShowAlram] = useState("");

  // setting 버튼 클릭 핸들러
  const handleSettingClick = () => {
    setShowColorModal(true);
  };

  // alram 버튼 클릭 핸들러
  const handleAlramClick = () => {
    setShowAlram((prev) => (prev === "active" ? "" : "active"));
  };

  // useMemo로 불필요한 재생성 방지
  const headerButtons = useMemo(
    () =>
      createHeaderButtons(
        mode,
        toggleMode,
        handleSettingClick,
        handleAlramClick,
      ),
    [mode, toggleMode],
  );
  return (
    <>
      <HeaderUtilsRoot className="header__utils">
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
        <AlarmPanel clssName={showAlram} />
      </HeaderUtilsRoot>
      <ThemeColorModal
        open={showColorModal}
        onClose={() => setShowColorModal(false)}
      />
    </>
  );
};

export default HeaderActions;
