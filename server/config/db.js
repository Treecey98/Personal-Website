const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Boothman123!?",
    database: "BlogPosts"
});

module.exports = db