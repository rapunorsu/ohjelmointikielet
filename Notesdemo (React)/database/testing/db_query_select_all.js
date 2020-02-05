
const options = require('../knoptions');
const knex = require('knex')(options);

knex.from('notes').select("*")
    .then((rows) => {
        console.log("starting apartments");
        console.log(rows);
        rows.forEach(row => console.log(`Id: ${row['notesid']} Content: ${row['content']} Date: ${row['date']} Important: ${row['important']}`));
    })
    .catch((err) => {
        console.log( err); throw err })
    .finally(() => {
        console.log("destroyed 1")
        knex.destroy();
    });