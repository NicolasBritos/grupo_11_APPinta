const path = require('path')
const express = require('express')
const port = process.env.PORT || 3000
const routers = require('./src/routers/index')

const app = express()

app.use('/', routers)

/* STATIC FILES */
console.log(path.resolve(__dirname, 'public'))
app.use(express.static(path.resolve(__dirname, 'public')))

/* TEMPLATE ENGINE */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './src/views'));

app.listen(port, () => {
    console.log('Run server')
})
