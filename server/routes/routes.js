const express = require("express");
const router = express.Router();
const db = require("../db");

// ==========================
// ✅ POST (Add Service)
// ==========================
router.post("/", (req, res) => {
  const { name, category, phone, location, experience } = req.body;

  if (!name || !category) {
    return res.status(400).json({ message: "Name & Category required" });
  }

  const sql =
    "INSERT INTO providersserviceadd (name, category, phone, location, experience) VALUES (?, ?, ?, ?, ?)";

  db.query(
    sql,
    [name, category, phone, location, experience],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      res.json({
        message: "Data saved ✅",
        id: result.insertId,
      });
    }
  );
});

// ==========================
// ✅ GET (All Services)
// ==========================
router.get("/", (req, res) => {
  const sql = "SELECT * FROM providersserviceadd";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json(result);
  });
});

// ==========================
// ✅ DELETE Service
// ==========================
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM providersserviceadd WHERE id = ?";

  db.query(sql, [id], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json({ message: "Deleted successfully ✅" });
  });
});

module.exports = router;