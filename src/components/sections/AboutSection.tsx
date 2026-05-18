import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { site } from "@/content/site";
import SectionHeading from "../SectionHeading";
import { brandColors } from "@/theme/theme";

export default function AboutSection() {
  return (
    <Box
      component="section"
      id="about"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <SectionHeading title={site.about.title} subtitle={site.about.subtitle} />
        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
              {site.about.body}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ mt: 3, fontWeight: 600, color: "primary.main" }}
            >
              {site.about.experienceLine}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              sx={{
                bgcolor: "secondary.main",
                color: "secondary.contrastText",
                position: "relative",
                overflow: "visible",
              }}
            >
              <FormatQuoteIcon
                sx={{
                  position: "absolute",
                  top: -12,
                  left: 24,
                  fontSize: 48,
                  color: brandColors.gold,
                  opacity: 0.9,
                }}
              />
              <CardContent sx={{ p: { xs: 3, md: 4 }, pt: 4 }}>
                <Typography variant="body1" sx={{ fontStyle: "italic", lineHeight: 1.8, mb: 2 }}>
                  &ldquo;{site.quote.text}&rdquo;
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  — {site.quote.author}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
