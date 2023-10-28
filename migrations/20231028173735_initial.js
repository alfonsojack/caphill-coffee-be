/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("coffeeshops", function (table) {
    table.increments("id").primary();
    table.string("name");
    table.string("img");
    table.string("address");
    table.integer("rating");
    table.json("hours");
    table.string("phoneNumber");
    table.string("website");
    table.boolean("foodProvided");
    table.boolean("dineIn");
    table.boolean("takeOut");
    table.boolean("wheelchairAccessible");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable('coffeeshops')
};
