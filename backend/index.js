const express = require('express');
const app = express();
const port = 3000
const { sequelize } = require('./models')

app.use(express.json())

//controllers
app.use('/api/users', require('./controllers/users'))
app.use('/api/recipes', require('./controllers/recipes'))
app.use('/api/ingredients', require('./controllers/ingredients'))

//server front-end

app.get('/', (req, res) => {
    //send my front-end
})


//port
app.listen(port, async () => {
    try {
    await sequelize.authenticate();
    console.log('connection has been established sucessfully.');
    await sequelize.sync();
} catch(error) {
    console.log('Unable to connect to the database', error);
}
console.log(`Example app listening on port ${port}`)
})

//user table
//name, email, password

//recipes
//Chicken in cream of mushrooms 
//Green pasta
//Orange chicken
//Beef mexican stew

//ingredients