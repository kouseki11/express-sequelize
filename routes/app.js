const router = require('express').Router()
const booksRouter = require('./booksRouter')

router.use('/api/v1/books', booksRouter)// books router endpoint

module.exports = router