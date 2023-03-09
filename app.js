const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//hbs es un motor de plantillas que permite renderizar vistas desde el servidor
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

//Middleware:Servir contenido estatico
app.use(express.static('public'));


//Rutas
app.get('/', (req,res) => {

    res.render('home',{
        nombre:'Pablo Estrella',
        titulo:'Curso Node Express'
    })
    //res.send('<h1>Hola Mundo desde la ruta1</h1>');
});
/*controlaGeneric se llama el callback o funcion que se ejecuta y esta funcion se llama
 controlador de la ruta, que es lo que se ejecuta cuando el usuario llama desde el navegador
 a la ruta como localhost:3030/
 Ver Seccion 7 - leccion # 92 
*/
const controlaGeneric=  (req,res) => {

    res.render('generic',{
        nombre:'Pablo Estrella',
        titulo:'Curso Node Express'
    })};

app.get('/generic', controlaGeneric);

app.get('/elements', (req,res) => {

    res.render('elements',{
        nombre:'Pablo Estrella',
        titulo:'Curso Node Express'
    })
});

app.get('*', (req,res) => {
    
    res.sendFile(__dirname + '/public/backup/template/404.html')
   //res.send('<h1>404 | Page not found</h1>');
});

app.listen(3030,()=>{
    console.log(`Server running at port ${port}`)
});



