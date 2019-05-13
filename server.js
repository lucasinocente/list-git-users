const express = require('express')
const app = express()

app.use(express.static('build'))

const port = process.env.PORT || 8081
app.listen(port)

console.log(`http://localhost:${port}`)