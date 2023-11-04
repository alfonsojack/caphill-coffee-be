const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('knex')
const config = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = knex(config)
const queries = require('./queries')

app.set('port', 3001)

//middleware
app.use(cors())

app.use(express.json());

//rename pathData to something more specific
//don't need async
//fix this

// app.get('/', (request, response) => {
//   queries.getAll().then(results => response.send(results))
// })

app.get('/', (request, response) => {
  response.send('Oh hey cofffe shop');
});


// app.get('/api/v1/pathData', (request, response) => {
//   const pathData = database.select().from('coffee_shop_data')
//   .then(pathData => {
//     response.status(200).json(pathData)
//   })
//   .catch(error => {
//     response.status(500).json({message: error.message })
//   })
// })


//will need another GET, to get a specific object based on it's ID. 

//do an app.post here --> tell it which route to hit
//api/v1/pathdata/coffeeshops:id

app.post('/SelectedShop/:id', async (request, response) => {
  const { ratingKey } = request.body;
  const { id } = request.params; // Get the ID from the URL parameters. Took out of request body. 

  // Validate the ratingKey sent in the body
  if (!['thumbsUp', 'thumbsDown'].includes(ratingKey)) {
    return response.status(400).json({ error: 'Invalid rating key' });
  }

  try {
    // Find the coffee shop by ID
    const coffeeShop = await database('caphill_coffee_shops').where({ id }).first();
    if (!coffeeShop) {
      return response.status(404).json({ error: 'Coffee shop not found' });
    }

    // Update the rating count for thumbsUp or thumbsDown
    const updatedRating = coffeeShop.rating[ratingKey] + 1;
    const updateResult = await database('caphill_coffee_shops')
      .where({ id })
      .update({
        rating: {
          ...coffeeShop.rating,
          [ratingKey]: updatedRating
        }
      }, ['id', 'rating']);

    // Send back the updated coffee shop data
    console.log("Server Response:", updateResult);

    response.json(updateResult[0]);
  } catch (error) {
    console.error('Error updating coffee shop rating:', error);
    response.status(500).json({ error: 'Internal server error' });
  }
});

// app.post('/SelectedShop/:id', async (request, response) => {
//   try {
//     const { id } = request.params;
//     const { ratingKey } = request.body;

//     // Retrieve the coffee shop object by ID from the database
//     const coffeeShop = await knex('caphill_coffee_shops').where( "id", id ).first();

//     if (!coffeeShop) {
//       return response.status(404).json({ error: 'Coffee shop not found' });
//     }

//     // Check if the specified rating key is valid
//     if (ratingKey !== 'thumbsUp' && ratingKey !== 'thumbsDown') {
//       return response.status(400).json({ error: 'Invalid rating key' });
//     }

//     // Increment the specified rating key
//     coffeeShop.rating[ratingKey] += 1;

//     // Update the object in the database
//     await knex('caphill_coffee_shops').where( "id", id ).update({ rating: coffeeShop.rating });

//     response.json(coffeeShop);
//   } catch (error) {
//     console.error('Error:', error);
//     response.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.post('/api/v1/pathData/:id', (request, response) => {
//   const params = request.body;
//   knex('coffee_shop_data')
//     .where({ id: params.id })
//     .increment('rating: thumbsUp', 1)
//       .returning(['id', 'rating'])
//       .then((updatedRows) => {
//         response.json(updatedRows)
//       })
//       .catch((error) => {
//         response.status(500).json({ error: 'database update failed'})
//       })
//     // .update(
//     //   {rating: params.rating
//     //   }, ['id', 'rating'],
// })
// figure out how to send the correct response
// google how to make it more dynamic to update whatever keys we are given in the object. 


//routes
app.listen(3001, () => {
  console.log('server has started on port 3001')
})

// knex('books')
//   .where({ id: 42 })
//   .update({ 
//     title: "The Hitchhiker's Guide to the Galaxy" 
//   }, ['id', 'title'])