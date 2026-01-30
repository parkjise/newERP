import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "@/styles/globalStyles";
import App from "./app/App.tsx";
// theme 설정
import { ThemeProvider } from "styled-components";
import { useThemeStore } from "@/stores/themeStore";
import { createTheme } from "@/styles/theme/createTheme";
import "remixicon/fonts/remixicon.css";
import "pretendard/dist/web/static/pretendard.css";

const AppWrapper = () => {
  const mode = useThemeStore((s) => s.mode);
  const accent = useThemeStore((s) => s.accent);
  const theme = createTheme(mode, accent);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
