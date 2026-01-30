import { type ReactNode } from "react";

import {
  type HeaderButton,
  type ThemeMode,
} from "@/app/layouts/Header/Header.type";

// 아이콘 상수
export const ICONS = {
  notification: <i className="ri-notification-2-line" />,
  global: <i className="ri-global-line" />,
  moon: <i className="ri-moon-line" />,
  sun: <i className="ri-sun-line" />,
  settings: <i className="ri-settings-3-line" />,
  user: <i className="ri-user-line" />,
} as const;

// 테마 아이콘 유틸리티 함수
export const getThemeIcon = (mode: ThemeMode): ReactNode => {
  return mode === "light" ? ICONS.moon : ICONS.sun;
};

// 헤더 버튼 설정 팩토리 함수
export const createHeaderButtons = (
  mode: ThemeMode,
  toggleMode: () => void,
  handleSettingClick: () => void
): HeaderButton[] => [
  {
    id: "alarm",
    modifier: "alarm",
    icon: ICONS.notification,
    label: "alarm",
    badge: 5,
  },
  {
    id: "language",
    modifier: "language",
    icon: ICONS.global,
    label: "language",
  },
  {
    id: "theme",
    modifier: "theme",
    icon: getThemeIcon(mode),
    label: "theme",
    onClick: toggleMode,
  },
  {
    id: "setting",
    modifier: "setting",
    icon: ICONS.settings,
    label: "setting",
    onClick: handleSettingClick,
  },
  {
    id: "profile",
    modifier: "profile",
    icon: ICONS.user,
    label: "profile",
  },
];

// 검색
export const LOCATION_OPTIONS = [
  { value: "서울" },
  { value: "성수" },
  { value: "송파" },
];

export const SEARCH_INPUT_WIDTH = 200;
