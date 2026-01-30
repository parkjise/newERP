// src/components/ui/modal/ThemeColorModal.tsx
import { Modal, Flex } from "antd";
import styled from "styled-components";
import { useThemeStore, type ThemeAccent } from "@/stores/themeStore";

const ColorButton = styled.button<{ $color: string; $active: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  background-color: ${({ $color }) => $color};
  border: 3px solid ${({ $active }) => ($active ? "#000" : "transparent")};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

interface ThemeColorModalProps {
  open: boolean;
  onClose: () => void;
}

const THEME_COLORS: Record<ThemeAccent, { color: string; name: string }> = {
  navy: { color: "#3d5a8b", name: "코발트블루" },
  blue: { color: "#3B82F6", name: "블루" },
  red: { color: "#E21A22", name: "레드" },
  brown: { color: "#92400E", name: "브라운" },
};

export const ThemeColorModal = ({ open, onClose }: ThemeColorModalProps) => {
  const { accent, setAccent } = useThemeStore();

  const handleColorSelect = (color: ThemeAccent) => {
    setAccent(color);
    onClose();
  };

  return (
    <Modal
      title="테마 컬러 선택"
      open={open}
      onCancel={onClose}
      footer={null}
      centered
    >
      <Flex gap={16} justify="center" style={{ padding: "20px 0" }}>
        {(Object.keys(THEME_COLORS) as ThemeAccent[]).map((key) => (
          <div key={key} style={{ textAlign: "center" }}>
            <ColorButton
              $color={THEME_COLORS[key].color}
              $active={accent === key}
              onClick={() => handleColorSelect(key)}
            />
            <div style={{ marginTop: 8, fontSize: 14 }}>
              {THEME_COLORS[key].name}
            </div>
          </div>
        ))}
      </Flex>
    </Modal>
  );
};
