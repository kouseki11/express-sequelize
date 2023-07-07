const express = require('express')

const app = express()
const port = 3000
const router = require('./routes/app')

app.listen(port, () => console.log(`Server running on port ${port}`))

app.use(express.json())
app.use(router)

// GET, POST, PUT, PATCH, DELETE
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Kouseki')
})