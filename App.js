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

<<<<<<< HEAD
app.get('/cart', (req, res) => {
    res.sendFile(templatePath('productCart'))
=======
app.get('/register', (req, res) => {
    res.sendFile(templatePath('register'))
>>>>>>> d0397cfa0bc7b49e4e6bfd3faab80574a1aa3fc2
})