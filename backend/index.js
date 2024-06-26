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
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
    console.log(`Database host: ${dbHost}`);
});

//user table
//name, email, password

//recipes
//Chicken in cream of mushrooms 
//Green pasta
//Orange chicken
//Beef mexican stew

//ingredients