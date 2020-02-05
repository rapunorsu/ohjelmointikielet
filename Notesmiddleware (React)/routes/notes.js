var express = require('express'); //uusi
var router = express.Router();  //uusi

const config = require('../utils/config') 
const jwt = require('jsonwebtoken') 

const options = config.DATABASE_OPTIONS;
const knex = require('knex')(options);

// poistettu getToken

router.get('/', (request, response, next) => {

     // poistettu autentikaatiokoodit
     const userId = response.locals.auth.userId;
     

    knex.from('notes').select("*").where('user_id', '=', userId/*decodedToken.id */)
        .then((rows) => {
            console.log("notes");
            console.log(rows);
            response.json(rows);
        })
        .catch((err) => {
            console.log(err);
            response.status(500).json(
                { error: 'database error in get' }
            )
        });
})

router.delete('/:id', (request, response, next) => {

    // poistettu autentikaatiokoodit
    const userId = response.locals.auth.userId;

    const id = request.params.id
    console.log("delete alkaa!!!!", id)
    knex.from('notes').select('*')
        .where('user_id', '=' , userId/*decodedToken.id*/)
        .andWhere('notesid', '=', id)
        .del()
        .then((rows) => {
            console.log("delete")
            response.status(204).end()
        }).catch((err) => {
            console.log(err);
            response.status(500).json(
                { error: 'database error in delete' }
            )
        })
})

router.post('/', (request, response, next) => {
    const note = request.body
    console.log(note)

    if (!(note.content && (typeof note.important === "boolean"))) {
        return response.status(400).json({
            error: 'data missing'
        })
    }

    // poistettu autentikaatiokoodit
    const userId = response.locals.auth.userId;
    console.log('userid: ',userId);

    note.user_id = userId; /*decodedToken.id*/
    note.date = new Date();

    knex('notes').insert(note)
        .then((id) => {
            console.log("more data inserted")
            note.notesid = id[0];
            response.json(note);
        })
        .catch((err) => {
            console.log(err);
            response.status(500).json(
                { error: 'database error in insert' }
            )
        })
})

router.put('/:id', (request, response, next) => {

    // poistettu autentikaatiokoodit
    const userId = response.locals.auth.userId;

    const id = request.params.id
    const note = request.body
    console.log("put:", note, id);

    if (!(note.content && note.date && (typeof note.important === "boolean"))) {
        console.log("put failed")
        return response.status(400).json({
            error: 'data missing'
        })
    }

    note.date = new Date(note.date);

    console.log(note.date);

    knex.from('notes')
        .where('user_id', '=', userId /*decodedToken.id*/)
        .andWhere('notesid', '=' , id)
        .update(note, ['content', 'important', 'date'])
        .then(() => {
            console.log("update")
            response.status(204).end()
        })
        .catch((err) => {
            console.log(err);
            response.status(500).json(
                { error: 'database error in update' }
            )
        })
})

module.exports = router;