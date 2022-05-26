const path = require('path')
const express = require('express')
const { templatePath } = require('./helpers/templatePath')
const log = console.log
const publicPath = path.resolve(__dirname, 'public')

const app = express()

app.use(express.static(publicPath))

app.listen(3000, () => {
    log('Run server')
})

app.get('/', (req, res) => {
    res.sendFile(templatePath('homeLogin'))
})

app.get('/home', (req, res) => {
    res.sendFile(templatePath('home'))
})

app.get('/register', (req, res) => {
    res.sendFile(templatePath('register'))
})