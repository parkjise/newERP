import { light } from "@/styles/theme/modes/light";
import { dark } from "@/styles/theme/modes/dark";
import { colors } from "./colors";
import { navy } from "./navy";
import { red } from "./red";
import { blue } from "./blue";
import { brown } from "./brown";

export type Mode = "light" | "dark";
export type Accent = "navy" | "red" | "blue" | "brown";

const accentThemes = {
  navy,
  red,
  blue,
  brown,
};

export interface AppTheme {
  mode: "light" | "dark";
  bg: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
  sidebarBg: string;
  colors: typeof colors & {
    primary: string;
    secondary: string;
    primaryHover: string;
  };
  icon: string;
  line: string;
  footerBg: string;
  menuActiveBg: string;
  menuActiveText: string;
  menuOverBg: string;
  menuIcon: string;
  menuActiveIcon: string;
  accent: typeof navy | typeof red | typeof blue | typeof brown;
}

export const createTheme = (mode: Mode, accent: Accent = "navy"): AppTheme => {
  const isDark = mode === "dark";
  const base = isDark ? dark : light;
  const accentColors = accentThemes[accent];

  return {
    ...base,
    colors: {
      ...colors,
      primary: accentColors.primary,
      secondary: accentColors.secondary,
      primaryHover: accentColors.bgHover,
    },
    accent: accentColors,
    sidebarBg: isDark ? accentColors.primary : base.sidebarBg, // 추가
    menuIcon: isDark ? accentColors.menuActiveBg : accentColors.primary,
    menuActiveIcon: isDark ? accentColors.primary : "#fff",
    menuActiveBg: isDark ? "#fff" : accentColors.primary,
    menuActiveText: isDark ? "#000" : "#fff",
    menuOverBg: isDark ? accentColors.secondary : accentColors.menuOverBg,
  };
};
