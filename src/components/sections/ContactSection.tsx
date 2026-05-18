import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import { site } from "@/content/site";
import SectionHeading from "../SectionHeading";
import ContactForm from "../ContactForm";

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
      <Container maxWidth="lg">
        <SectionHeading
          title={site.sections.contact.title}
          subtitle={site.sections.contact.subtitle}
        />
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Card sx={{ height: "100%", bgcolor: "secondary.main", color: "secondary.contrastText" }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
                  Contact {site.owner}
                </Typography>
                <Stack spacing={3} sx={{ mt: 3 }}>
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
                  <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
                    <PersonIcon sx={{ mt: 0.25 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 600 }}>{site.owner}</Typography>
                      <Typography variant="body2" sx={{ opacity: 0.85, mt: 0.5 }}>
                        General Contractor
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
                <Typography variant="body2" sx={{ mt: 4, opacity: 0.85, lineHeight: 1.7 }}>
                  Proudly serving {site.serviceAreaDescription}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Card>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <ContactForm />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
