"use client";

import { useState } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { site } from "@/content/site";

type FormState = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { value: string } }) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from users */}
      <TextField
        name="website"
        value={form.website}
        onChange={handleChange("website")}
        sx={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
        <TextField
          label="Your Name"
          required
          fullWidth
          value={form.name}
          onChange={handleChange("name")}
        />
        <TextField
          label="Phone"
          required
          fullWidth
          type="tel"
          value={form.phone}
          onChange={handleChange("phone")}
        />
        <TextField
          label="Email"
          required
          fullWidth
          type="email"
          value={form.email}
          onChange={handleChange("email")}
        />
        <FormControl fullWidth required>
          <InputLabel id="project-type-label">Project Type</InputLabel>
          <Select
            labelId="project-type-label"
            label="Project Type"
            value={form.projectType}
            onChange={(e) => setForm((prev) => ({ ...prev, projectType: e.target.value }))}
          >
            {site.projectTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Tell us about your project"
          required
          fullWidth
          multiline
          rows={4}
          value={form.message}
          onChange={handleChange("message")}
        />

        {status === "success" && (
          <Alert severity="success">
            Thank you! Your message has been sent. We&apos;ll be in touch soon.
          </Alert>
        )}
        {status === "error" && <Alert severity="error">{errorMessage}</Alert>}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={status === "loading"}
          sx={{ alignSelf: "flex-start", minWidth: 180 }}
        >
          {status === "loading" ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
        </Button>
      </Box>
    </Box>
  );
}
