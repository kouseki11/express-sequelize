const { Book } = require('../models')

const getAllBooks = async (req, res) => {
   try {
     const data = await Book.findAll({
        order: [['id', 'ASC']]
     })

     const result = {
        status: 'ok',
        data: data
     }
     
     res.status(200).json(result)
   } catch (error) {
     console.log(error, '<<< error get all books')
   }
}

const getBooksById = async (req, res) => {
    try {
        const { id } = req.params

        const data = await Book.findByPk(id)
         if (data === null) {
            return res.status(404).json({
                status: 'failed',
                message: `data book with id ${id} is not found` 
            })
         }

         res.status(200).json({
            status: 'ok',
            data: data
         })
    } catch (error) {
        console.log(error, '<<< error get book by id')
    }
}

const createBooks = async (req, res) => {
    try { 
      const { title, genre } = req.body

      const newBook = await Book.create({ title: title, genre: genre})

      res.status(201).json({
        status: 'ok',
        data: newBook
      })
    } catch (error) {
        console.log(error, '<<< error create new book')
    }
}

const updateBooks = async (req, res) => {
    try { 
      const { id } = req.params

      const { title, genre } = req.body

      const book = await Book.findByPk(id)

      if(!book) {
        return res.status(404).json({
            status: 'failed',
            message: `data book with id ${id} is not exists`
        })
      }

      book.title = title
      book.genre = genre
      book.updatedAt = new Date()

      book.save()

      res.status(201).json({
        status: 'ok',
        data: book
      })
    } catch (error) {
        console.log(error, '<<< error update book')
    }
}

const deleteBooks = async (req, res) => {
    try { 
      const { id } = req.params

      const book = await Book.findByPk(id)

      if(!book) {
        return res.status(404).json({
            status: 'failed',
            message: `data book with id ${id} is not exists`
        })
      }

      book.destroy()

      const bookAll = await Book.findAll({
        order: [['id', 'ASC']]
     })

      res.status(201).json({
        status: 'ok',
        message: `sucess delete book with id ${id}`,
        data: bookAll
      })
    } catch (error) {
        console.log(error, '<<< error delete book')
    }
}

module.exports = { getAllBooks, getBooksById, createBooks, updateBooks, deleteBooks }