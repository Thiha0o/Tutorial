"use client";

import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";

export default function BlogDetail() {
  const params = useParams();
  console.log("Blog Id: ", params.id);
  const BlogID = params.id;

  return (
    <Box>
      <Typography>Blog: {BlogID}</Typography>
    </Box>
  );
}
