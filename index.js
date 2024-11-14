// webserver:
const express = require('express')
const app = express()
// specify that we are using a view template engine
app.set('view engine', 'pug')
//  specify the directory
app.set('views', './views')

app.get('/', (req,res) => {
    // you can pass argument also
res.render('index', { title1: 'Hey', message: 'Hello there!' })
})

app.listen(3000, () => console.log("Listening on port 3000"));
