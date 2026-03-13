const express = require("express");
const app = express();
const hospitalRoutes = require("./routes/hospitalRoutes");
app.use(express.json());
app.use("/api", hospitalRoutes);
app.get("/", (req, res) => {
  res.send("Hospital API running");
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
