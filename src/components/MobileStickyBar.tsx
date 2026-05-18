"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { site } from "@/content/site";

export default function MobileStickyBar() {
  return (
    <Paper
      elevation={8}
      sx={{
        display: { xs: "flex", md: "none" },
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        borderRadius: 0,
        p: 1,
        gap: 1,
      }}
    >
      <Button
        component="a"
        href={`tel:${site.phoneTel}`}
        variant="contained"
        color="primary"
        fullWidth
        startIcon={<PhoneIcon />}
        size="medium"
      >
        Call
      </Button>
      <Button
        component="a"
        href="#contact"
        variant="contained"
        color="secondary"
        fullWidth
        size="medium"
      >
        Estimate
      </Button>
      <Button
        component="a"
        href={`mailto:${site.email}`}
        variant="outlined"
        color="secondary"
        sx={{ minWidth: 48, px: 1 }}
        aria-label="Email"
      >
        <EmailIcon />
      </Button>
    </Paper>
  );
}
