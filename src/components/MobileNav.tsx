"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { site } from "@/content/site";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{ width: 280, pt: 2, pb: 3, px: 2 }}
        role="presentation"
        onClick={onClose}
      >
        <List>
          {site.nav.map((item) => (
            <ListItemButton key={item.href} component="a" href={item.href}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mt: 2 }}>
          <Button
            component="a"
            href={`tel:${site.phoneTel}`}
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<PhoneIcon />}
          >
            Call {site.phone}
          </Button>
          <Button
            component="a"
            href={`mailto:${site.email}`}
            variant="outlined"
            color="secondary"
            fullWidth
            startIcon={<EmailIcon />}
          >
            Email Us
          </Button>
          <Button component="a" href="#contact" variant="contained" color="secondary" fullWidth>
            Get Estimate
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
