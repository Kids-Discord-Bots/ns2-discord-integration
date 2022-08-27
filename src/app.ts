import * as express from "express";
import * as bodyParser from 'body-parser';
import helmet from "helmet";
const cors = require('cors')
import 'dotenv/config';
import { init } from "./api/api_init";
const app = express()

const port = process.env.SERVER_PORT
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors({
    origin: ['http://localhost']
}))

init(app)

// -----------------------------------
// LISTEN
// -----------------------------------
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
// -----------------------------------