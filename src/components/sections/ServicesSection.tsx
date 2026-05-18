import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import BathtubIcon from "@mui/icons-material/Bathtub";
import KitchenIcon from "@mui/icons-material/Kitchen";
import HandymanIcon from "@mui/icons-material/Handyman";
import type { SvgIconComponent } from "@mui/icons-material";
import { site } from "@/content/site";
import SectionHeading from "../SectionHeading";

const iconMap: Record<(typeof site.services)[number]["icon"], SvgIconComponent> = {
  HomeWork: HomeWorkIcon,
  Bathtub: BathtubIcon,
  Kitchen: KitchenIcon,
  Handyman: HandymanIcon,
};

export default function ServicesSection() {
  return (
    <Box
      component="section"
      id="services"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          title={site.sections.services.title}
          subtitle={site.sections.services.subtitle}
        />
        <Grid container spacing={3}>
          {site.services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Grid key={service.id} size={{ xs: 12, sm: 6 }}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 24px rgba(0, 35, 78, 0.12)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        bgcolor: "primary.main",
                        color: "primary.contrastText",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      <Icon fontSize="large" />
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
