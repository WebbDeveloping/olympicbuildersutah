"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { site } from "@/content/site";
import MobileNav from "./MobileNav";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          bgcolor: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: scrolled ? "1px solid" : "none",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, gap: 2 }}>
            <Box
              component={Link}
              href="#"
              sx={{
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
                "& img": {
                  height: "auto",
                  width: "auto",
                  maxHeight: 52,
                  maxWidth: { xs: 160, sm: 200, md: 220 },
                },
              }}
            >
              <Image
                src={site.images.logo}
                alt={site.name}
                width={220}
                height={147}
                priority
                sizes="(max-width: 600px) 160px, 220px"
              />
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                flex: 1,
                justifyContent: "center",
              }}
            >
              {site.nav.map((item) => (
                <Button
                  key={item.href}
                  component="a"
                  href={item.href}
                  color="inherit"
                  sx={{ color: "text.primary", fontWeight: 500 }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              <Button
                component="a"
                href={`tel:${site.phoneTel}`}
                variant="outlined"
                color="secondary"
                startIcon={<PhoneIcon />}
              >
                {site.phone}
              </Button>
              <Button
                component="a"
                href={`mailto:${site.email}`}
                variant="contained"
                color="primary"
                startIcon={<EmailIcon />}
              >
                Email
              </Button>
            </Box>

            <IconButton
              sx={{ display: { md: "none" }, ml: "auto", color: "text.primary" }}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }} />
    </>
  );
}
