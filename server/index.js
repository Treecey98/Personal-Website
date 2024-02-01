const express = require('express')
const db = require('./config/db');
const cors = require('cors');

const app = express()

const PORT = 3001

app.use(cors());
app.use(express.json());

app.get('/api/get', (req, res) => {
    db.query(
        "SELECT * FROM Posts", (err, result) => {
            if (err) {
                console.log(err);
            }
            
            res.send(result);
    });

    console.log('This api call is working');
});


app.get('/api/recentblogposts', (req, res) => {
    db.query(
        "SELECT * from Posts ORDER BY date_posted DESC LIMIT 4", (err, result) => {
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
        "SELECT * FROM Posts WHERE id = ?", id,(err, result) => {
            if (err) {
                console.log(err);
            }
            
            res.send(result);
    });
});

app.use('/', express.static('./build'));

app.use(
    cors({
        origin: ["https://edward-treece.onrender.com"]
    })
)

app.listen(PORT, () => {
    console.log(`Server running on port ${{PORT}}`);
});
