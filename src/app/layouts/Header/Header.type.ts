import { type ReactNode } from "react";

// 공통 타입 정의
export type ThemeMode = "light" | "dark";

export type HeaderProps = {
  className?: string;
};

export type HeaderButton = {
  id: string;
  modifier: string;
  label: string;
  icon: ReactNode;
  badge?: number;
  onClick?: () => void;
};

