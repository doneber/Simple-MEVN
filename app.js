import express from 'express'
import cors from 'cors'
import pug from 'pug'
import morgan from 'morgan'
import favicon from 'serve-favicon'
import routes from './routes/index'

const app = express(),
    port = process.env.port || 3000,
    pathViews = `${__dirname}/views`,
    pathFavicon = `${__dirname}/public/img/favicon.ico`,
    pathPublic = `${__dirname}/public`;

app
    /* configuraciones de la App */
    .set('views', pathViews)
    .set('view engine', 'pug')
    .set('port', port)
    /* middlewares */
    .use(morgan('tiny'))    //para ver las peticiones a nuestro servidor
    .use(cors())    //para hacer peticiones a otros dominios
    .use(express.json())    //para usar json en respuestas
    .use(express.urlencoded({ extended: true }))   //para trabajar con aplicaiones www-form-urlencode
    .use(favicon(pathFavicon))
    .use(express.static(pathPublic))    //definimos la carpeta estatica (public)
    /* rutas */
    .use('/', routes)
    .listen(port, () => {
        console.log(`Corriendo el el puerto: ${port}`)
    })