"use client";

import {Box, Typography} from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "grey.200", p: 2, textAlign: "center", mt: 4 }}>
      <Typography variant="body2">
        © &copy; 2025 My App. All Right reserved.
      </Typography>
    </Box>
  );
}