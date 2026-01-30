import { useState } from "react";
import { useThemeStore } from "@/stores/themeStore";
import { useMemo } from "react";
import { createHeaderButtons } from "@/app/layouts/Header/Header.config";
import Button from "@/components/ui/button";
import IconWithBadge from "@/components/ui/badge/IconWithBadge";
import { ThemeColorModal } from "@/components/ui/modal/ThemeColorModal";

const HeaderActions = () => {
  const toggleMode = useThemeStore((s) => s.toggleMode);
  const mode = useThemeStore((s) => s.mode);
  // 테마 컬러 모달 상태
  const [showColorModal, setShowColorModal] = useState(false);

  // setting 버튼 클릭 핸들러
  const handleSettingClick = () => {
    setShowColorModal(true);
  };

  // useMemo로 불필요한 재생성 방지
  const headerButtons = useMemo(
    () => createHeaderButtons(mode, toggleMode, handleSettingClick),
    [mode, toggleMode],
  );
  return (
    <>
      <div className="header__utils">
        {headerButtons.map(({ id, modifier, icon, badge, label, onClick }) => (
          <Button
            key={id}
            variant="primary"
            shape="round"
            aria-label={label}
            icon={badge ? <IconWithBadge icon={icon} count={badge} /> : icon}
            onClick={onClick}
            className={`header__button header__button--${modifier}`}
          />
        ))}
      </div>
      <ThemeColorModal
        open={showColorModal}
        onClose={() => setShowColorModal(false)}
      />
    </>
  );
};

export default HeaderActions;
