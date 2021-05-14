const express = require('express')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));



app.get('/', (req, res) => {
    res.send('Hello world')
})



app.listen(PORT, () => {
    console.log(`App started in the ${PORT}`)
})

module.exports = app