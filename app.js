const express = require('express');
const cors = require('cors');
require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api/users : GET
// api/users/:id : GET
// api/users/ : POST
// api/users/:id : PATCH
// api/users/:id : DELETE

app.use('/api/users', require('./routes/users.route'));

// home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// 404 not found route
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Route not found!'
    })
});

// Server error handler
app.use((err, req, res, next) => {
    res.status(500).json({
        message: 'Something broke!'
    })
});


module.exports = app;