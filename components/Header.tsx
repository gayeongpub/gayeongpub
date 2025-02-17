"use client"; // ✅ Next.js 13+에서는 MUI 동작을 위해 필요
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          LOGO
        </Typography>
        <Button color="inherit">Menu 1</Button>
        <Button color="inherit">Menu 2</Button>
        <Button color="inherit">Menu 3</Button>
        <Button color="inherit">Menu 4</Button>
        <Button color="inherit">Menu 5</Button>
      </Toolbar>
    </AppBar>
  );
}
