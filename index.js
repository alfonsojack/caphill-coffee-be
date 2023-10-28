const express = require('express');
const app = express();
const cors = require("cors");
// const knex = require('knex');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const port = 3000

app.locals.title = 'coffeeshopsData'

app.listen(port, () => {
  console.log(`server has started on port ${port}`)
})

// app.set('port', 5432);

// middleware 
app.use(cors());
app.use(express.json());

// GET ENDPOINTS
app.get("/", (request, response) => {
  response.send("cannot GET");
})

app.get('/coffeeshops', async(request, response) => {
  const coffeeshops = await database('coffeeshops').select()
  response.status(200).json(coffeeshops)
})