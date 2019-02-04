const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

app.use(cors())
app.use(bodyParser.json())

morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '045-1236543'
  },
  {
    id: 2,
    name: 'Arto Järvinen',
    number: '041-21423123'
  },
  {
    id: 3,
    name: 'Lea Kutvonen',
    number: '040-4323234'
  },
  {
    id: 4,
    name: 'Martti Tienari',
    number: '09-784232'
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

const randomId = () => {
  let id = 0
  while (true) {
    id = Math.floor(Math.random()*50)
    if (!persons.some(p => p.id === id)) {
      break
    }
  }
  return id
}

app.post('/api/persons', (req, res) => {
  const body = req.body
  const findPerson = persons.some(p => p.name === body.name)

  if (body.name === '') {
    return res.status(400).json({
      error: 'missing name'
    })
  }
  if (body.number === '') {
    return res.status(400).json({
      error: 'missing number'
    })
  }
  if (findPerson) {
    return res.status(400).json({
      error: 'name must be unique'
    })
  }

  const person = {
    id: randomId(),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person)

  res.json(person)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(p => p.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(p => p.id !== id)
  res.status(204).end()
})

app.get('/info', (req, res) => {
  const date = new Date()
  res.send(`<p>Puhelinluettelossa ${persons.length} henkilön tiedot</p><p>${date}</p>`)
  
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})