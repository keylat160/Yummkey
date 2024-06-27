const express = require('express');
const app = express();
const port =3000
const { sequelize } = require('./models')

app.use(express.json())


//server front-end

app.get('/', (req, res) => {
    //send my front-end
})

//controllers
app.use('/recipes', require('./controllers/recipes'));

//port
app.listen(port, async () => {
    try {
    await sequelize.authenticate();
    console.log('connection has been established sucessfully.');
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