const express = require("express");
const router = express.Router();
const hospitals = [
  {
    name: "City Care Hospital",
    location: "Lucknow",
    rating: 4.2,
    services: [
      { name: "X-ray", price: 500 },
      { name: "MRI", price: 3000 }
    ]
  },
  {
    name: "Apollo Clinic",
    location: "Lucknow",
    rating: 4.5,
    services: [
      { name: "X-ray", price: 650 },
      { name: "Blood Test", price: 400 }
    ]
  }
];

router.get("/hospitals", (req, res) => {
  res.json(hospitals);
});

module.exports = router;
