//PARENT SIDE !!!
function parPass() {
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost', // Change this to your MySQL host
    user: 'root', // Change this to your MySQL username
    password: 'root', // Change this to your MySQL password
    database: 'stuzone_db' // Change this to your MySQL database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    const sql = 'INSERT INTO students (full_name, child_full_name, school_name, standard, section, email, mobile_number) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [formData.fullName, formData.childFullName, formData.schoolName, formData.standard, formData.section, formData.email, formData.mobileNumber];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            console.log('Data inserted successfully');
            res.status(200).json({ message: 'Data inserted successfully' });
        }
    });
});

// Start server
const PORT = process.env.PORT || 5502;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



    window.location="parent-1.html";
}
//PARENT SIDE !!!