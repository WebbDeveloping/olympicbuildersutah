import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import { site } from "@/content/site";
import SectionHeading from "../SectionHeading";

export default function ContactSection() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        pb: { xs: 14, md: 12 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="sm">
        <SectionHeading
          title={site.sections.contact.title}
          subtitle={site.sections.contact.subtitle}
        />
        <Card sx={{ bgcolor: "secondary.main", color: "secondary.contrastText" }}>
          <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
              Contact {site.owner}
            </Typography>
            <Stack spacing={3} sx={{ mt: 3, alignItems: "center" }}>
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <PhoneIcon />
                <Link href={`tel:${site.phoneTel}`} color="inherit" underline="hover" sx={{ fontWeight: 600 }}>
                  {site.phone}
                </Link>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <EmailIcon />
                <Link href={`mailto:${site.email}`} color="inherit" underline="hover">
                  {site.email}
                </Link>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <PersonIcon />
                <Box sx={{ textAlign: "left" }}>
                  <Typography sx={{ fontWeight: 600 }}>{site.owner}</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.85 }}>
                    General Contractor
                  </Typography>
                </Box>
              </Stack>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 4, justifyContent: "center" }}
            >
              <Button
                component="a"
                href={`tel:${site.phoneTel}`}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<PhoneIcon />}
                fullWidth
              >
                Call {site.phone}
              </Button>
              <Button
                component="a"
                href={`mailto:${site.email}`}
                variant="outlined"
                size="large"
                startIcon={<EmailIcon />}
                fullWidth
                sx={{
                  color: "inherit",
                  borderColor: "rgba(255,255,255,0.7)",
                  "&:hover": {
                    borderColor: "#fff",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Email Us
              </Button>
            </Stack>
            <Typography variant="body2" sx={{ mt: 4, opacity: 0.85, lineHeight: 1.7 }}>
              Proudly serving {site.serviceAreaDescription}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
