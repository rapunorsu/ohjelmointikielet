const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const options = require('../database/knoptions');
const knex = require('knex')(options);

app.use(bodyParser.json())


let notes = require('./notesData')

app.get('/', (req, res) => {
  res.send('<h1>Hello World! Tää on mun oma node express serveri livenä</h1>')
})


app.get('/notes', (req, res) => {
  // res.json(notes)

  knex.from('notes').select("*")
    .then((rows) => {
      console.log("Printing Notes");
      console.log(rows);

      res.json(rows) // sending data to client
    })
  // .catch((err) => {
  // console.log(err); throw err})
  // res.status(404).end()

  //   .finally(() => {
  //   knex.destroy();
  //  });
});

app.get('/notes/:id', (request, response) => {
  const id = request.params.id
  knex.from('notes').select('*').where('notesid', '=', id)
    .then((rows) => {
      console.log(rows);
      response.json(rows);
    })
    .catch((err) => {
      console.log(err); throw err
    })
})


app.post('/notes', (request, response) => {
  const note = request.body

  if (!note.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  // const maxId = notes.length > 0
  //   ? Math.max(...notes.map(n => n.id)) 
  //   : 0

  note.date = new Date()

  // note.id = maxId + 1
  // notes = notes.concat(note);

  // console.log(note)
  // response.json(note)

  knex('notes').insert(note)
 .then((id) => {
 console.log();
 note.id = id[0];
 console.log("Tietueita lisätty")
 console.log(note)
 response.json(note)
 })
 .catch((err) => {
 console.log(err);
 response.status(500).json(
 { error: 'database error in insert, or auth failed'}
 )
 });
})

app.delete('/notes/:id',(request,response) => {
  const id = request.params.id
  console.log(id)
  knex.from('notes')
  .select('*').where('notesid', '=', id).del()
  .then((row)=> {
    console.log('poisto onnistui! (knex)')
    response.json('poisto onnistui!')
    return response.status(204).end()
})

})           


app.put('/notes/:id', (request, response) => {
  const body = request.body
  const id = (request.params.id)
  console.log("Put alkaa", body, id)

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  notes = notes.map(n => {
    if (id === n.id) {
      n = body;
    }
    return n;
  });

  console.log(body)
  response.json(body)

})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})