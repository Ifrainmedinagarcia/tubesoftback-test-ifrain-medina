const express = require('express')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 3001

//Middleware
const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

//require Routes
const time = require('./routers/time.routes')

app.use('/v1/api/time', time)



app.listen(PORT, () => {
    console.log(`App started in the ${PORT}`)
})

module.exports = app