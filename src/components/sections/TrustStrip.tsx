import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import { site } from "@/content/site";

export default function TrustStrip() {
  return (
    <Box
      component="section"
      sx={{
        py: 3,
        bgcolor: "background.paper",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
          }}
        >
          <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <PhoneIcon color="primary" fontSize="small" />
              <Link href={`tel:${site.phoneTel}`} sx={{ fontWeight: 600 }} underline="hover">
                {site.phone}
              </Link>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <EmailIcon color="primary" fontSize="small" />
              <Link href={`mailto:${site.email}`} underline="hover">
                {site.email}
              </Link>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap" }}>
            <PlaceIcon color="secondary" fontSize="small" />
            <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
              Proudly Serving:
            </Typography>
            {site.serviceAreas.map((area) => (
              <Chip key={area} label={area} size="small" color="secondary" variant="outlined" />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
