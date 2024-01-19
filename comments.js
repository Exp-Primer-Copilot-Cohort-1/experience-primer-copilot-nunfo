// Create web server
// http://localhost:3000/comments
// http://localhost:3000/comments/1

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const comments = [
  {
    id: 1,
    username: 'John Doe',
    comment: 'Hello World',
  },
  {
    id: 2,
    username: 'Jane Doe',
    comment: 'Hi, there',
  },
  {
    id: 3,
    username: 'Jim Doe',
    comment: 'Good morning',
  },
]

// CORS
app.use(cors())

// Static files
app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/comments', (req, res) => {
  res.json(comments)
})

app.get('/comments/:id', (req, res) => {
  const id = req.params.id
  const comment = comments.find((comment) => comment.id === Number(id))
  res.json(comment)
})

// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})