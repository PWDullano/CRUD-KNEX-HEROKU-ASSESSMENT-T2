exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function (table) {
    table.increments();
    table.integer('post_id')
    table.string('commenter');
    table.string('body');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('comments')
};
