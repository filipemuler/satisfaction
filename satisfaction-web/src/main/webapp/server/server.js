import bodyParser from 'body-parser'
import express from 'express'
import {index, pessoas} from './routes'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

// Routes
app.get('/', function (req, res) {
   res.sendFile('/home/filipe/workspace/satisfaction/satisfaction-web/src/main/webapp/index.html');
})

app.use('/teste', index)

app.listen(8000)
console.log("Server runing at http://localhost:8000")
