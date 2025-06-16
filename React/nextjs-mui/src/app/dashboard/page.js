"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button, Typography } from "@mui/material";

import Link from "next/link"; //For Link

import LinkButton from "@/components/LinkButton"; // For Link Button (external)

export default function Dashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  const setFilter = (value) => {
    router.push(`/dashboard?filter=${value}`);
  };

  console.log("filter", filter);

  return (
    <div>
      <Typography variant="h4">
        Dashboard Page Current Filter: {filter}
      </Typography>
      <Button onClick={() => setFilter("active")}>Active</Button>
      <Button onClick={() => setFilter("achieved")}>Achieved</Button>
      {/* <Link href="/" passHref>
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
      </LinkButton> */}
    </div>
  );
}
