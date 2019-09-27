import {Router} from 'express'
const router = Router()
router
	.get('/mostrar', mostrarLibros)

function mostrarLibros(req, res){
	/* ... */
	res.render('Libros/libros')
}
/*
router
	.post('./crear', crearLibro)
	.update('./actualizar/:id', actualizarLibro)
	.delete('./eliminar/:id', eliminarLibro)

function crearLibro(req, res){
	// ---
	res.redirect('/mostrar')
}
function actualizarLibro(req, res){
	// ---
	res.redirect('/mostrar')
}
function eliminarLibro(req, res){
	// ---
	res.redirect('/mostrar')	
}
*/

module.exports = router