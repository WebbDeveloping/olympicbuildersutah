import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { brandColors } from "@/theme/theme";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Box sx={{ textAlign: align, mb: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: align === "center" ? "center" : "flex-start",
          gap: 2,
          mb: 1,
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 2,
            bgcolor: brandColors.gold,
            display: { xs: "none", sm: "block" },
          }}
        />
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: 700,
            color: "secondary.main",
            fontSize: { xs: "1.75rem", md: "2.25rem" },
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            width: 40,
            height: 2,
            bgcolor: brandColors.gold,
            display: { xs: "none", sm: "block" },
          }}
        />
      </Box>
      {subtitle && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 560, mx: align === "center" ? "auto" : 0 }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
