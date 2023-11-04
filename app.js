
const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'))

app.get('/', (req, res ) => {
    res.render('home',{
        nombre: 'Antony Ralon',
        titulo: 'Examen Final Desarrollo Web'
    })
})

app.get('/panels', (req, res ) => {
    res.render('panels',{
        nombre: 'Antony Ralon',
        titulo: 'Examen Final Desarrollo Web'
    })
})

app.get('/Trailers', (req, res ) => {
    res.render('Trailers',{
        nombre: 'Antony Ralon',
        titulo: 'Examen Final Desarrollo Web'
    })
})

app.get('*', (req, res)=> {
    res.sendFile(__dirname + '/public/404.html')
})


app.listen(port, ()=>{
    console.log(`Ejemplo app listen at http://localhost:${port}`)
})