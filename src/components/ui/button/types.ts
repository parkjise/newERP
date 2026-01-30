import type { ButtonProps as AntButtonProps } from "antd";
import type { ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "text"
  | "ghost"
  | "link";
export type ButtonSize = "sm" | "md" | "lg";

export type AppButtonProps = Omit<
  AntButtonProps,
  "type" | "size" | "variant"
> & {
  /** 버튼 변형 스타일 */
  variant?: ButtonVariant;
  /** 버튼 크기 */
  size?: ButtonSize;
  /** 버튼 내용 */
  children?: ReactNode;
  /** 전체 너비 사용 여부 */
  fullWidth?: boolean;
  /** 로딩 텍스트 */
  loadingText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};
