import express from "express";
import mysql2 from "mysql2";
import cors from "cors";

const app = express();

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bookmyshow_auth",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello this is backend");
});

app.get("/bookmyshow_auth", (req, res) => {
  const getQuery = "SELECT * FROM accounts";
  db.query(getQuery, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/bookmyshow_auth/booking", (req, res) => {
  const getQuery = "SELECT * FROM booking";
  db.query(getQuery, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


app.post("/accounts", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO accounts (email, password) VALUES (?,?)",
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/booking", (req, res) => {
  const ticket = req.body.ticket;

  db.query(
    "INSERT INTO booking (ticket) VALUES (?)",
    [ticket],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});


app.listen(8800, () => {
  console.log("connected backend");
});
