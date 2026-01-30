import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeMode = "light" | "dark";
export type ThemeAccent = "navy" | "blue" | "red" | "brown";

type ThemeState = {
  mode: ThemeMode;
  accent: ThemeAccent;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
  setAccent: (accent: ThemeAccent) => void;

  // (선택) persist hydration 완료 여부
  hasHydrated: boolean;
  setHasHydrated: (v: boolean) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      mode: "light",
      accent: "navy",

      toggleMode: () =>
        set({ mode: get().mode === "light" ? "dark" : "light" }),

      setMode: (mode) => set({ mode }),
      setAccent: (accent) => set({ accent }),

      hasHydrated: false,
      setHasHydrated: (v) => set({ hasHydrated: v }),
    }),
    {
      name: "app-theme",
      version: 1,
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
