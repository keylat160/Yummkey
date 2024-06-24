const express = require('express');
const app = express();

//app set

app.get('/', (req, res) => {
    res.send(('home'));
})

//controllers
app.use('/recipes', require('./controllers/recipes'));