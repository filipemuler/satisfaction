import bodyParser from 'body-parser'
import express from 'express'
import index from './routes'

import x from './index'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

// Routes
app.use('/teste', index)

app.get('/', function (req, res) {
   res.send(x);
})

app.listen(8000)
console.log("Server runing at http://localhost:8000")
