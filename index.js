const express = require('express')
const path = require('path')
const exphbs  = require('express-handlebars')

const app = express()
const PORT = 3000

app.engine('handlebars', exphbs.engine({extname: '.hbs', defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'static'))) // making static folder public
app.use('/', require(path.join(__dirname, 'routes/blog.js'))) // redirect to routes/blog.js when the link is '/' means home page


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})