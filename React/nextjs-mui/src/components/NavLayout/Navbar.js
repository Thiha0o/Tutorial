"use client";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>

        <Link href="/dashboard" passHref>
          <Button color="inherit" variant="outlined" sx={{ mr: 2 }}>
            Dashboard
          </Button>
        </Link>

        <Link href="/home" passHref>
          <Button color="inherit" variant="outlined">
            Home
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
