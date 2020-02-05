exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {
            id: 1,
          username: 'Kalmari95 ', 
          name: 'Kalle', 
          password: 'salis222'},
  
          {
            id: 2,
            username: 'Kalmari96 ', 
            name: 'Kalleriina', 
            password: 'salis2322'}
  
           
       
        ]);
      });
  };