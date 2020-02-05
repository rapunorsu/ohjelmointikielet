const options = require('../knoptions');
const knex = require('knex')(options);

const more_apartments = [
    {notesid: 4, 
    content: 'testi lisäys', 
    date: new Date(), 
    important: true}
    ]

knex('notes').insert(more_apartments)
    .then(() => console.log("more data inserted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });