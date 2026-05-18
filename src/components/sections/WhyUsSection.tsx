import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import VerifiedIcon from "@mui/icons-material/Verified";
import BuildIcon from "@mui/icons-material/Build";
import GroupsIcon from "@mui/icons-material/Groups";
import { site } from "@/content/site";
import SectionHeading from "../SectionHeading";

const icons = [VerifiedIcon, BuildIcon, GroupsIcon];

export default function WhyUsSection() {
  return (
    <Box
      component="section"
      id="why-us"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          title={site.sections.whyUs.title}
          subtitle={site.sections.whyUs.subtitle}
        />
        <Grid container spacing={3}>
          {site.whyUs.map((item, index) => {
            const Icon = icons[index] ?? VerifiedIcon;
            return (
              <Grid key={item.title} size={{ xs: 12, md: 4 }}>
                <Card sx={{ height: "100%", textAlign: "center", p: 2 }}>
                  <CardContent>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        bgcolor: "secondary.main",
                        color: "secondary.contrastText",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                      }}
                    >
                      <Icon sx={{ fontSize: 32 }} />
                    </Box>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {item.description}
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
