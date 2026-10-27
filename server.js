const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(express.json({ limit: "10kb" }));
app.use(express.static(path.join(__dirname, "public"), { maxAge: "1h" }));

app.get("/healthz", (_req, res) => res.send("ok"));

// Appointment requests. Currently logged to the server console (see README to add email).
app.post("/api/appointment", (req, res) => {
  const { name = "", phone = "", treatment = "", message = "" } = req.body || {};
  const cleanPhone = String(phone).replace(/[\s\-()]/g, "");

  if (String(name).trim().length < 2) {
    return res.status(400).json({ error: "Please enter your name." });
  }
  if (!/^(\+91)?[6-9]\d{9}$/.test(cleanPhone)) {
    return res.status(400).json({ error: "Please enter a valid 10-digit mobile number." });
  }

  console.log("New appointment request:", {
    name: String(name).trim().slice(0, 80),
    phone: cleanPhone,
    treatment: String(treatment).slice(0, 60),
    message: String(message).slice(0, 500),
    at: new Date().toISOString()
  });
  res.json({ ok: true });
});

app.use((_req, res) => res.status(404).sendFile(path.join(__dirname, "public", "index.html")));

app.listen(PORT, () => console.log(`Dental Avenue Clinic site running on port ${PORT}`));
