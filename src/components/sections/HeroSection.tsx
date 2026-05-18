import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { site } from "@/content/site";

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "85vh", md: "90vh" },
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Image
        src={site.images.hero}
        alt="Olympic Builders — Park City general contractor"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(0,35,78,0.88) 0%, rgba(0,35,78,0.65) 50%, rgba(196,30,36,0.45) 100%)",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: { xs: 8, md: 12 } }}>
        <Stack spacing={3} sx={{ maxWidth: 720 }}>
          <Typography
            component="p"
            variant="overline"
            sx={{
              color: "rgba(255,255,255,0.9)",
              fontWeight: 600,
              letterSpacing: 2,
            }}
          >
            {site.about.experienceLine}
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.75rem", md: "3.25rem" },
              lineHeight: 1.15,
            }}
          >
            {site.tagline}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              opacity: 0.9,
              fontStyle: "italic",
              fontSize: { xs: "1rem", md: "1.15rem" },
            }}
          >
            {site.heroSubtext}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 1 }}>
            <Button
              component="a"
              href="#contact"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              Get a Free Estimate
            </Button>
            <Button
              component="a"
              href={`tel:${site.phoneTel}`}
              variant="outlined"
              size="large"
              startIcon={<PhoneIcon />}
              sx={{
                color: "#fff",
                borderColor: "rgba(255,255,255,0.7)",
                "&:hover": {
                  borderColor: "#fff",
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              {site.phone}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
