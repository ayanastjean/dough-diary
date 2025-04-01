const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const sendEmail = require('./mailer');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, 'db', 'tdd.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite at', dbPath);
  }
});

app.post('/register', (req, res) => {
  const { first_name, last_name, email, address } = req.body;

  if (!first_name || !last_name || !email || !address) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const sql = `INSERT INTO submissions (first_name, last_name, email, address) VALUES (?, ?, ?, ?)`;
  db.run(sql, [first_name, last_name, email, address], function (err) {
    if (err) {
      console.error("DB Error:", err.message);
      return res.status(500).json({ error: err.message });
    }

    console.log("Saved to DB:", this.lastID);

    sendEmail('register', email, first_name)
      .then(() => {
        console.log('Email sent!');
        res.status(200).json({ message: 'Submission successful', id: this.lastID });
      })
      .catch((err) => {
        console.error('Email failed:', err);
        res.status(200).json({ message: 'Submission saved, but email failed', id: this.lastID });
      });
  });
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const sql = `INSERT INTO contact_submissions (name, email, message) VALUES (?, ?, ?)`;
  db.run(sql, [name, email, message], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    sendEmail('contact', email, name)
      .then(() => {
        console.log('Contact email sent!');
        res.status(200).json({ message: 'Contact form submitted successfully', id: this.lastID });
      })
      .catch((err) => {
        console.error('Contact email failed:', err);
        res.status(200).json({ message: 'Form submitted but email failed', id: this.lastID });
      });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
