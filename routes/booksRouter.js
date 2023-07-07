const router = require('express').Router()
const { getAllBooks, getBooksById, createBooks, updateBooks, deleteBooks } = require('../controllers/booksController')

router.get('/', getAllBooks)
router.get('/:id', getBooksById)
router.post('/create', createBooks)
router.post('/update/:id', updateBooks)
router.post('/delete/:id', deleteBooks)

module.exports = router