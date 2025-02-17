"use client"; // ✅ Next.js 13+에서는 MUI 동작을 위해 필요
import { Box, Button, Typography } from "@mui/material";

export default function Footer() {
  // 최상단으로 스크롤
  const scrollToTop = () => {
    const start = window.scrollY;
    const startTime = performance.now();
    const duration = 250;

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start * (1 - progress));

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <Box
      component="footer"
      sx={{ textAlign: "center", p: 2, bgcolor: "background.paper" }}
    >
      <Button
        variant="contained"
        sx={{ position: "fixed", bottom: 20, right: 20 }}
        onClick={scrollToTop}
      >
        Top
      </Button>
      <Typography variant="body2">
        This page is not intended for commercial use.
      </Typography>
      <Typography variant="body2">All rights are reserved</Typography>
    </Box>
  );
}
