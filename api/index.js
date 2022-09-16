const dotenv = require('dotenv')        
dotenv.config()
const config = require('./config')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
// const compression = require('compression')
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

const app = express()

const { port, allowed_domains } = config

app.use(cors({origin : allowed_domains}))
app.use(helmet())
// app.use(compression)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

let mailOptions = {
    from: 'rizkyaditya2106@gmail.com',
    to: 'rizkyaditya.osha@gmail.com',
    cc: '',
    bcc: '',
    subject: 'Applicant CV',
    text: 'Hallo, here is new applicant',
    attachments: [
        { filename: 'result.pdf', path: './result.pdf' }
    ]
}

// POST PDF generation and fetching of the data
app.post('/create-pdf', (req,res,next) => {
    pdf.create(pdfTemplate(req.body), pdfOptions).toFile('result.pdf', (err)=>{
        if(err) {
            res.send(Promise.reject().catch(next))
        } else {
            res.send(Promise.resolve())
        }
    }) 
})

// GET Send the generated PDF to the client
app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
    transporter.sendMail(mailOptions, function(err, info) {
        if(err) {
            res.send(console.log('Error'))
        } else {
            res.send(console.log('Message Sent'))
        }
    })
})

// Page
app.get('/', (req, res) => {
    return res.send(`This is OSHA Technology page server, ${allowed_domains}`)
})

const server = http.createServer(app)

server.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app;