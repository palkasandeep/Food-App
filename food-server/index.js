const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
require('dotenv').config();

const port = process.env.PORT || 6001;

// Middlewares     
app.use(cors());
app.use(express.json());
// console.log(process.env.ACCESS_TOKEN)

// MongoDB configurations
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ty3tv.mongodb.net/foodapdb?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });
//jwt authentication

app.post('/jwt', async (req, res) => {
  const user = req.body
  const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
    expiresIn: '1hr',
  })
  res.send({ token });
})


//importing the routes
const menuRoutes = require('./apis/model/routes/Menuroutes');

const cartroutes = require('./apis/model/routes/Cartroute')
const userRoutes = require('./apis/model/routes/Userroutes')


app.use('/menu', menuRoutes)
app.use('/carts', cartroutes)
app.use('/users', userRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
