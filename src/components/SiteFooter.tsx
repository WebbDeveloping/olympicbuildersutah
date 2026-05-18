import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { site } from "@/content/site";
import { brandColors } from "@/theme/theme";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "secondary.main",
        color: "secondary.contrastText",
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
          }}
          spacing={3}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>
              {site.name}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.85 }}>
              Park City&apos;s Premier General Contractor
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.85, mt: 0.5 }}>
              {site.about.experienceLine}
            </Typography>
          </Box>

          <Stack spacing={1}>
            <Link
              href={`tel:${site.phoneTel}`}
              color="inherit"
              underline="hover"
              sx={{ fontWeight: 600 }}
            >
              {site.phone}
            </Link>
            <Link href={`mailto:${site.email}`} color="inherit" underline="hover">
              {site.email}
            </Link>
          </Stack>

          <Stack direction="row" spacing={2}>
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} color="inherit" underline="hover" variant="body2">
                {item.label}
              </Link>
            ))}
          </Stack>
        </Stack>

        <Divider sx={{ my: 3, borderColor: brandColors.gold, opacity: 0.4 }} />

        <Typography variant="body2" sx={{ opacity: 0.7, textAlign: "center" }}>
          © {year} {site.name}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
