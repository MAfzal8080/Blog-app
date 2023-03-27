const express = require('express')
//eslint-disable-next-line
const server =require("./dbs")
const app = express()
var cors = require('cors')

const port = 5000
app.use(cors())
app.use(express.json())

app.use('/blog', require('./routes/blog'))
app.use('/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})














































