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
          overflow: "visible",
          bgcolor: scrolled
            ? "rgba(255,255,255,0.98)"
            : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: scrolled ? "1px solid" : "none",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Box
            component={Link}
            href="#"
            aria-label={`${site.name} home`}
            sx={{
              position: "absolute",
              left: { xs: 4, sm: 8, md: 0 },
              top: { xs: 2, md: 4 },
              zIndex: 1300,
              lineHeight: 0,
              pointerEvents: "auto",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "scale(1.02)",
              },
              "& img": {
                display: "block",
                height: "auto",
                width: "auto",
                maxHeight: { xs: 96, sm: 120, md: 160 },
                maxWidth: { xs: 168, sm: 210, md: 280 },
              },
            }}
          >
            <Image
              src={site.images.logo}
              alt={site.name}
              width={320}
              height={213}
              priority
              sizes="(max-width: 600px) 168px, 280px"
            />
          </Box>

          <Toolbar
            disableGutters
            sx={{
              position: "relative",
              zIndex: 1,
              minHeight: { xs: 64, md: 72 },
              gap: 2,
            }}
          >
            {/* Reserve horizontal space so nav links stay clear of the overlapping logo */}
            <Box
              aria-hidden
              sx={{
                flexShrink: 0,
                width: { xs: 172, sm: 220, md: 292 },
              }}
            />

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                flex: 1,
                justifyContent: "center",
                minWidth: 0,
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

            <Box
              sx={{ display: { xs: "none", md: "flex" }, gap: 1, ml: "auto" }}
            >
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
              sx={{
                display: { md: "none" },
                ml: "auto",
                color: "text.primary",
              }}
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
