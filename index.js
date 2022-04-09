const express = require('express')
const app = express()
const books = require('./db.json')

// Middleware
app.use(express.json())

app.get('/books', (req,res) => {
    res.status(200).json(books)
})
//req.params.id contient ce qui est envoyé dans l'URL
app.get('/books/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const book = books.find(book => book.id === id)
    res.status(200).json(book)
})


app.post('/books', (req,res) => {
    books.push(req.body)
    res.status(200).json(books)
})

app.put('/books/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let book = books.find(book => book.id === id)
    book.name =req.body.name,
    book.city =req.body.city,
    book.type =req.body.type,
    res.status(200).json(book)
})

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
  })
