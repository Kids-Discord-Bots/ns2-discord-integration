import express from "express";
import helmet from "helmet";
import bodyParser from 'body-parser';
const cors = require('cors')
const config = require("../config/config.json")
const app = express()

const port = config.port
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors({
    origin: ['http://localhost']
}))


// -----------------------------------
// LISTEN
// -----------------------------------
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
// -----------------------------------