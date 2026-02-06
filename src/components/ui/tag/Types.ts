import type { TagProps } from "antd";
import { STATUS_COLOR_MAP } from "./Tag.config";
// 1. Props 타입 정의
// Antd의 TagProps를 상속받아 기존 기능(closable, onClose 등)을 유지합니다.
export interface CommonTagProps extends Omit<TagProps, "color"> {
  text: string; // 태그 내용
  status?: keyof typeof STATUS_COLOR_MAP; // 미리 정의된 status만 허용
  customColor?: string; // 예외적으로 커스텀 색상이 필요할 경우
  color?: string;
}
