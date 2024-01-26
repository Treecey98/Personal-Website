const express = require('express')
const db = require('./config/db');
const cors = require('cors');

const app = express()

const PORT = 3001

app.use('/', express.static('build'))

app.use(cors());
app.use(express.json());

app.get('/api/get', (req, res) => {
    db.query(
        "SELECT * FROM posts", (err, result) => {
            if (err) {
                console.log(err);
            }
            
            res.send(result);
    });
});


app.get('/api/recentblogposts', (req, res) => {
    db.query(
        "SELECT * from posts ORDER BY date_posted DESC LIMIT 4", (err, result) => {
            if (err) {
                console.log(err);
            }

            res.send(result)
        }
    )
})


app.get('/api/getFromId/:id', (req, res) => {
    
    const id = req.params.id
    db.query(
        "SELECT * FROM posts WHERE id = ?", id,(err, result) => {
            if (err) {
                console.log(err);
            }
            
            res.send(result);
    });
});

app.post('/api/create', (req, res) => {

    const title = req.body.title;
    const text = req.body.text;
    const date = new Date()

    const formattedDate = 

    date

    db.query(
        "INSERT INTO posts (title, posts_text, date_posted) VALUES (?,?,?)", [title, text, formattedDate], (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${{PORT}}`);
});

/* app.get("/", (req, res) => {
    db.query(
        "INSERT INTO posts (title, posts_text, user_name) VALUES ('Test Blog2c', 'Test', 'Ed')");
}); */
