
exports.up = function(knex, Promise) {
  knex.schema.table('users', function (table) {
  table.integer('famous_person_id').unsigned()
  table.foreign('famous_person_id').references('Items.user_id_in_items')
  })
};

exports.down = function(knex, Promise) {
  return Promise.all([
   table.dropForeign(columns, ['famous_person_id'])
  ])
};
