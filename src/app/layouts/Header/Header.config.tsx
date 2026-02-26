import { type ReactNode } from "react";

import {
  type HeaderButton,
  type ThemeMode,
  type NotificationItem,
} from "@/app/layouts/Header/Header.type";

// 아이콘 상수
export const ICONS = {
  notification: <i className="ri-notification-2-line" />,
  global: <i className="ri-global-line" />,
  moon: <i className="ri-moon-line" />,
  sun: <i className="ri-sun-line" />,
  settings: <i className="ri-settings-3-line" />,
  link: <i className="ri-links-line" />,
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
  handleSettingClick: () => void,
  handleNotificationsClick: () => void,
  unreadCount: number,
): HeaderButton[] => [
  {
    id: "alarm",
    modifier: "alarm",
    icon: ICONS.notification,
    label: "alarm",
    badge: unreadCount > 0 ? unreadCount : undefined,
    onClick: handleNotificationsClick,
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
    id: "link",
    modifier: "link",
    icon: ICONS.link,
    label: "link",
  },
  {
    id: "profile",
    modifier: "profile",
    icon: ICONS.user,
    label: "profile",
  },
];

// 알림
export const notificationData: NotificationItem[] = [
  {
    id: 1,
    title: "업데이트 알림",
    date: "1일전",
    state: "update",
  },
  {
    id: 2,
    title: "공지사항 알림",
    date: "1일전",
    state: "notice",
  },
  {
    id: 3,
    title: "공지사항 ",
    date: "3일전",
    state: "notice",
  },
];

// 검색
export const LOCATION_OPTIONS = [
  { value: "서울" },
  { value: "성수" },
  { value: "송파" },
];

export const SEARCH_INPUT_WIDTH = 200;
