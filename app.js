import express from 'express'
import cors from 'cors'
import pug from 'pug'
import morgan from 'morgan'
import path from 'path'
import favicon from 'serve-favicon'


const app = express();
const port = process.env.port || 3000;
app
    /* configuraciones de la App */
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'pug')
    .set('port', port)
    /* middlewares */
    .use(favicon(path.join(__dirname, '/public/img/favicon.ico')))
    .use(morgan('tiny'))    //para ver las peticiones a nuestro servidor
    .use(cors())    //para hacer peticiones a otros dominios
    .use(express.json())    //para usar json en respuestas
    .use(express.urlencoded({ extended: true }))   //para trabajar con aplicaiones www-form-urlencode

    .use(express.static(path.join(__dirname, 'public')))    //definimos la carpeta estatica (public)

    /* rutas */
    .get('/', (req, res) => {
        res.render('./index.html')
    })
    .listen(port, () => {
        console.log(`Corriendo el el puerto: ${port}`)
    })