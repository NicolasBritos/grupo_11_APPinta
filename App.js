const path = require('path')
const express = require('express')
const port = process.env.PORT || 3000
const routers = require('./src/routers/index')
const rememberMeMiddleware = require('./src/middlewares/rememberMeMiddleware')
const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware')
const methodOverride = require('method-override')
const session = require('express-session')
const cookies = require('cookie-parser')
const cors = require('cors')
const app = express()
//const cookies = require('cookie-parser')


/* SESSION AND COOKIES */
app.use(session({
    secret: '@$8c&ksxrs83c7e+)p$nkq$h+x(+)wr169c)3ou_hq+m2ystr_',
    resave: true,
    saveUninitialized: true
}))

app.use(cookies())
app.use(cors())

/* MIDDLEWARE */
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(userLoggedMiddleware)
app.use(rememberMeMiddleware)

/* STATIC FILES */
app.use(express.static(path.resolve(__dirname, 'public')))

/* TEMPLATE ENGINE */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './src/views'));

app.listen(port, () => {
    console.log('Run server')
})

app.use('/', routers)


