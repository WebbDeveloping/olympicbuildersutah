import Image from "next/image";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { site } from "@/content/site";
import SectionHeading from "../SectionHeading";

export default function ProjectsSection() {
  return (
    <Box
      component="section"
      id="projects"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          title={site.sections.projects.title}
          subtitle={site.sections.projects.subtitle}
        />
        <Grid container spacing={3}>
          {site.projects.map((project) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  overflow: "hidden",
                  "&:hover .project-image": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardMedia sx={{ position: "relative", height: 220, overflow: "hidden" }}>
                  <Image
                    className="project-image"
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                  />
                  <Chip
                    label="Sample"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      bgcolor: "rgba(0,0,0,0.6)",
                      color: "#fff",
                    }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }} gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.caption}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
