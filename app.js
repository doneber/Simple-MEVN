import express from 'express'
import cors from 'cors'
import pug from 'pug'
import morgan from 'morgan'
import favicon from 'serve-favicon'
import routes from './routes/index'
import routesItems from './routes/items'

const app = express(),
    port = process.env.port || 3000,
    pathViews = `${__dirname}/views`,
    pathFavicon = `${__dirname}/public/img/favicon.ico`,
    pathPublic = `${__dirname}/public`,
    pathPublicMaterialize = `${__dirname}/node_modules/materialize-css/dist`;
/*funciones*/
function error404(req, res, next){
    //La funcion manda el error a la vista
    const error = new Error()
    const locals = {
        title: 'Error 404',
        descripcion: 'Recurso no encontrado',
        error
    }
    error.status = 404
    res.status(404).render('error404', locals)
}
app
    /* configuraciones de la App */
    .set('views', pathViews)    //Definimos la ruta para todas nuestra vistas (views)
    .set('view engine', 'pug')  //El motor de plantillas
    .set('port', port)  //Definimos el puerto a usar
    /* middlewares */
    .use(morgan('tiny'))    //para ver las peticiones a nuestro servidor
    .use(cors())    //para hacer peticiones a otros dominios
    .use(express.json())    //para usar json en respuestas
    .use(express.urlencoded({ extended: true }))   //para trabajar con aplicaiones www-form-urlencode
    .use(favicon(pathFavicon))  //para no tener problemas con el favicon
    .use(express.static(pathPublic))    //definimos la carpeta estatica (public)
    .use(express.static(pathPublicMaterialize))    //definimos la carpeta estatica (materialize)
    /* rutas */
    .use('/', routes)
    .use('/items', routesItems)
     /* 404 */
    .use(error404)
    .listen(port, () => {
        console.log(`Corriendo el el puerto: ${port}`)
    })