import bodyParser from 'body-parser'
import express from 'express'
import {index, pessoas} from './routes'
import file from '../index.html'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

// Routes
app.get('/', function (req, res) {
   res.sendfile(file);
})

app.use('/teste', index)

app.listen(8000)
console.log("Server runing at http://localhost:8000")
