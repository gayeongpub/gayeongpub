"use client"; // ✅ 클라이언트 컴포넌트

import { ReactNode } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

// ✅ theme 정의
let theme = createTheme({
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
          padding: "8px 16px", // ✅ 버튼 내부 여백 추가
          fontSize: "14px", // ✅ 기본 글씨 크기 지정
          minWidth: "100px", // ✅ 버튼 최소 너비 설정
        },
      },
    },
  },
});

// ✅ 반응형 폰트 적용
theme = responsiveFontSizes(theme);

// ✅ ThemeProviderWrapper 컴포넌트
export const ThemeProviderWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
