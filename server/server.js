const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/add_providers", (req, res) => {
  console.log("BODY:", req.body);

  const { name, category, phone, location, experience } = req.body;

  if (!name || !category || !phone) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  const sql =
    "INSERT INTO providersserviceadd (name, category, phone, location, experience) VALUES (?, ?, ?, ?, ?)";

  db.query(
    sql,
    [name, category, phone, location, experience],
    (err, result) => {
      if (err) {
        console.log("MYSQL ERROR:", err.sqlMessage || err);
        return res.status(500).json({ error: err.sqlMessage });
      }

      res.json({ message: "Success", result });
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});