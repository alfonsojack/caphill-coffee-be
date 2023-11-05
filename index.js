const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('knex')
const config = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = knex(config)
const queries = require('./queries')

app.set('port', 3001)
app.use(cors())

app.use(express.json());


app.get('/', (request, response) => {
  queries.getAll().then(results => response.send(results))
})

// app.get('/', (request, response) => {
//   response.send('Oh hey cofffe shop');
// });

// app.get('/api/v1/debug', async (request, response) => {
//   const result = process.env;
//   response.status(200).json(result);
// });

app.post('/SelectedShop/:id', async (request, response) => {
  const { ratingKey } = request.body;
  const { id } = request.params; 


  if (!['thumbsUp', 'thumbsDown'].includes(ratingKey)) {
    return response.status(400).json({ error: 'Invalid rating key' });
  }

  try {
    const coffeeShop = await database('caphill_coffee_shops').where({ id }).first();
    if (!coffeeShop) {
      return response.status(404).json({ error: 'Coffee shop not found' });
    }

    const updatedRating = coffeeShop.rating[ratingKey] + 1;
    const updateResult = await database('caphill_coffee_shops')
      .where({ id })
      .update({
        rating: {
          ...coffeeShop.rating,
          [ratingKey]: updatedRating
        }
      }, ['id', 'rating']);

    console.log("Server Response:", updateResult);

    response.json(updateResult[0]);
  } catch (error) {
    console.error('Error updating coffee shop rating:', error);
    response.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3001, () => {
  console.log('server has started on port 3001')
})
