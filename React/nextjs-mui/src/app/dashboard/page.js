"use client";

import { Button, Typography } from "@mui/material";
import Link from "next/link";
import LinkButton from "@/components/LinkButton";

export default function Dashboard() {
  return (
    <div>
      <Typography variant="h4">Dashboard Page</Typography>
      <Link href="/" passHref>
        <Button variant="contained" sx={{ mr: 2 }}>
          Go to My App Page
        </Button>
      </Link>
      <Link href="/home" passHref>
        <Button variant="contained" sx={{ mr: 2 }}>
          Go to Home Page
        </Button>
      </Link>
      <LinkButton href="/">
        Go to My App Page by LinkButton component
      </LinkButton>
      <LinkButton href="/home">
        Go to Home Page by LinkButton component
      </LinkButton>
    </div>
  );
}
