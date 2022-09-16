const dotenv = require('dotenv')        
dotenv.config()
const config = require('./config')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const pdf = require('html-pdf')
const http = require('http')
const nodemailer = require('nodemailer')

const pdfTemplate = require('./documents')
const pdfOptions = {
    "format": "A4",
    "footer": {
        "height": "53mm"
    }
}

const app = require("./src/app")

const server = http.createServer(app)

server.listen(port, () => console.log(`Listening on port ${port}`))