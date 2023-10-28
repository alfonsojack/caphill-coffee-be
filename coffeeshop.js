// const coffeeshopsData = require('./coffeeshopsData');

// const createCoffeeshop = async (knex, coffeeshop) => {
//   const shopId = await knex('coffeeshops').insert({
//     name: coffeeshop.name,
//     img: coffeeshop.img,
//     address: coffeeshop.address,
//     rating: coffeeshop.rating,
//     hours: coffeeshop.hours,
//     phoneNumber: coffeeshop.phoneNumber,
//     website: coffeeshop.website,
//     foodProvided: coffeeshop.foodProvided,
//     dineIn: coffeeshop.dineIn,
//     takeOut: coffeeshop.takeOut,
//     wheelchairAccessible: coffeeshop.wheelchairAccessible
//   }, 'id');

//   return Promise.all();
// };



// exports.seed = async (knex) => {
//   try {
//     await knex('coffeeshops').del() // delete all coffeeshops

//     let coffeeshopPromises = coffeeshopsData.map(coffeeshop => {
//       return createCoffeeshop(knex, coffeeshop);
//     });

//     return Promise.all(coffeeshopPromises);
//   } catch (error) {
//     console.log(`Error seeding data: ${error}`)
//   }
// };