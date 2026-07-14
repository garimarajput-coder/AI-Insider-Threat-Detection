const activityRoutes = require("./routes/activityRoutes");
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

   const allowedOrigins = process.env.CLIENT_URL
     ? process.env.CLIENT_URL.split(",")
     : ["http://localhost:5173"];

   app.use(
     cors({
       origin: allowedOrigins,
     })
   );
   app.use(express.json());
app.use("/api/activities", activityRoutes);

app.get("/", (req, res) => {
  res.send("🚀 AI Insider Threat Detection API is Running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
  });
