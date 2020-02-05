exports.up = function(knex, Promise) {
    return knex.schema
    
    
   

  .createTable('users', t => {
    t.increments('id').primary()
    t.string('username').notNullable()
    t.string('name').notNullable()
    t.string('password').notNullable()
})

.createTable('notes', t => {
    t.increments('notesid').primary()
    t.string('content').notNullable()
    t.string('date').notNullable()
    t.integer('important').notNullable()
    t.integer('user_id').unsigned().references('id').inTable('users').notNull().onDelete('cascade');
})

};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('notes')
};
