"use client"; // ✅ 클라이언트 컴포넌트로 강제 지정

import { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// ✅ MUI 테마 정의
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#000" },
    secondary: { main: "#fff" },
    background: { default: "#111", paper: "#222" },
    text: { primary: "#fff", secondary: "#aaa" },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
      },
    },
  },
});

// ✅ Props 타입 정의
interface ThemeProviderWrapperProps {
  children: ReactNode;
}

// ✅ 클라이언트 컴포넌트에서 ThemeProvider 적용
export default function ThemeProviderWrapper({
  children,
}: ThemeProviderWrapperProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
