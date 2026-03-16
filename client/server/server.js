const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/hospitals', (req, res) => {
  const hospitals = [
    { name: "City Care Hospital", service: "X-ray", price: 500 },
    { name: "Apollo Clinic", service: "X-ray", price: 650 },
    { name: "Health Plus", service: "Blood Test", price: 400 }
  ];
  res.json(hospitals);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
