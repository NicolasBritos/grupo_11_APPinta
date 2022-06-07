const path = require('path')
const express = require('express')
const port = process.env.PORT || 3000
const routers = require('./src/routers/index')

const app = express()

app.use('/', routers)

app.use(express.static(path.resolve(__dirname, 'public')))

app.listen(port, () => {
    console.log('Run server')
})
