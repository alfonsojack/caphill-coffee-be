const coffeeshopsData = require("./coffeeshopsData");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  try {
    await knex("coffeeshops").del();
    await knex("coffeeshops").insert(coffeeshopsData).returning("*");
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
};
