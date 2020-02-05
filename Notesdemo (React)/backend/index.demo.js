const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())


let notes = require('./notesData')

app.get('/', (req, res) => {
  res.send('<h1>Hello World! Tää on mun oma node express serveri livenä</h1>')
})

app.get('/notes', (req, res) => {
  res.json(notes)
})



app.get('/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    response.json(note)
    if (note) {
        response.json(note)
    } else {
    response.status(404).end()
}
  })

app.delete('/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
  
    response.status(204).end()
  })


  app.post('/notes', (request, response) => {
    const body = request.body

    if (!body.content) {
        return response.status(400).json({ 
          error: 'content missing' 
        })
      }

    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => n.id)) 
      : 0

      const note = request.body

      note.id = maxId + 1
      notes = notes.concat(note);
      
      console.log(note)
      response.json(note)
  })


  app.post('/notes', (request, response) => {
    const note = request.body
    console.log(note)
  
    response.json(note)
  })

  app.put('/notes/:id', (request, response) => {
    const body = request.body
    const id = Number(request.params.id)

    if (!body.content) {
        return response.status(400).json({ 
          error: 'content missing' 
        })
      }
    
    notes = notes.map( n => {
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