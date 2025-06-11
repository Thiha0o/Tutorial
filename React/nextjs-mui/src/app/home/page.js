"use client";

import { Button, Typography } from "@mui/material";
import Link from "next/link";
import LinkButton from "@/components/LinkButton";

export default function Home() {
  return (
    <div>
      <Typography variant="h4">Home Page</Typography>
      <Link href="/" passHref>
        <Button variant="contained" sx={{ mr: 2 }}>
          Go to My App Page
        </Button>
      </Link>
      <Link href="/dashboard" passHref>
        <Button variant="contained" sx={{ mr: 2 }}>
          Go to Dashboard Page
        </Button>
      </Link>
      <LinkButton href="/">
        Go to My App Page by LinkButton component
      </LinkButton>
      <LinkButton href="/dashboard">
        Go to Dashboard Page by LinkButton component
      </LinkButton>
    </div>
  );
}
