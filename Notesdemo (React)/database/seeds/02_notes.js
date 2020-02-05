exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {
        content: 'Koirat kissoja ', 
        date: new Date(), 
        important: true,
        user_id: 1},

        {
        content: 'Testi yy kaa koo', 
        date: new Date(), 
        important: false,
        user_id: 1
      },

          {
          content: 'toimii tää kyl', 
          date: new Date(), 
          important: true,
          user_id: 2}
     
      ]);
    });
};