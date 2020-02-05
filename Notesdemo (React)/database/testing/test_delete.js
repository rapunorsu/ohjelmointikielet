const options = require('../knoptions');
const knex = require('knex')(options);

knex.from('notes').select('*')
    .where('notesid', 4)
    .del()
    .then((rows) => {
        console.log("delete")
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });