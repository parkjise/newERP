"use client";

import React, { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { useThemeStore } from "@/stores/themeStore";
import { createTheme } from "@/styles/theme/createTheme";

export default function Providers({ children }: { children: React.ReactNode }) {
  const mode = useThemeStore((s) => s.mode);
  const accent = useThemeStore((s) => s.accent);
  const hasHydrated = useThemeStore((s) => s.hasHydrated);

  // (선택) 깜빡임 싫으면 hydration 전 렌더 막기
  if (!hasHydrated) return null;

  const theme = useMemo(() => createTheme(mode, accent), [mode, accent]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
