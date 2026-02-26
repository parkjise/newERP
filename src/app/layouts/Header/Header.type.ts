import { type ReactNode } from "react";

export type ThemeMode = "light" | "dark";
export type NotificationState = "update" | "notice";

export interface HeaderProps {
  className?: string;
}

export interface HeaderButton {
  id: string;
  modifier: string;
  label: string;
  icon: ReactNode;
  badge?: number;
  onClick?: () => void;
}

export interface HeaderActions {
  className: string;
}

export interface NotificationItem {
  id: number;
  title: string;
  date: string;
  state: NotificationState;
}

export interface NotificationProps extends HeaderActions {
  notifications: NotificationItem[];
  setNotifications: React.Dispatch<React.SetStateAction<NotificationItem[]>>;
}
