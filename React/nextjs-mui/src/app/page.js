"use client";

import { Box, Button, Typography } from "@mui/material";
import MUIBox from "@/components/MUIBox";
import MUIContainer from "@/components/MUIContainer";
import MUIGrid from "@/components/MUIGrid";
import MUIStack from "@/components/MUIStack";
import MUISx from "@/components/MUISx";
import NavLayout from "@/components/NavLayout/NavLayout";
import BasicForm from "@/components/BasicForm/BasicForm";
import ContactFormCopy from "@/components/ContactForm/ContactFormCopy"; //From Ye Htut Naung
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Home() {
  return (
    <div>
      {/* <Box>
        <Typography variant="h4" component="h1">
          Welcome to Next.js with MUI!
        </Typography>
        <Button variant="outlined" color="primary">
          outlined Button
        </Button>
        <Button variant="contained" color="primary">
          Contained Button
        </Button>
        <Button variant="text" color="primary">
          Text Button
        </Button>
      </Box>

      <MUIBox />
      <MUIContainer />
      <MUIGrid />
      <MUIStack />
      <MUISx /> */}
      <NavLayout>
        <Box>
          <Typography>Nav Layout Children Content</Typography>
        </Box>
      </NavLayout>

      {/* <BasicForm /> */}
      {/* <ContactFormCopy /> */}
      {/* Up file is form ye htut */}
      {/* <ContactForm /> */}
    </div>
  );
}
