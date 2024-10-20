const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Set the directory for EJS files
app.set('views', __dirname + '/views');

// Route to render 'home.ejs'
app.get('/', (req, res) => {
    res.render('home');
});

// Add more routes for other pages, like profile.ejs, data.ejs, etc.
app.get('/profile', (req, res) => {
    res.render('profile');
});

app.get('/data', (req, res) => {
    res.render('data');
});

// Start the server
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});
