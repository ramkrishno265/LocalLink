const mysql = require("mysql2");

// Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "locallink",
});

// Connect DB
db.connect((err) => {
  if (err) {
    console.log("DB Error ❌", err);
  } else {
    console.log("MySQL Connected ✅");
  }
});

module.exports = db;