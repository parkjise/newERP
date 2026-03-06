import { create } from "zustand";
import { type NotificationItem } from "@/app/layouts/Header/Header.type";
import { notificationData } from "@/app/layouts/Header/Header.config";

interface NotificationStore {
  notifications: NotificationItem[];
  // 알림 삭제
  removeNotification: (id: number) => void;
  // 읽지 않은 알림 수
  markAsRead: (id: number) => void; // ✅ 단일 읽음 처리
  markAllAsRead: () => void; // ✅ 전체 읽음 처리
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: notificationData,
  // 1. 개별 알림 삭제
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((item) => item.id !== id),
    })),
  // 2. 단일 알림 읽음 처리
  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((item) =>
        item.id === id ? { ...item, isRead: true } : item,
      ),
    })),
  // 3. 모든 알림 기읽음 처리
  markAllAsRead: () =>
    set((state) => ({
      notifications: state.notifications.map((item) => ({
        ...item,
        isRead: true,
      })),
    })),
}));
