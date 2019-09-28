import { Router } from 'express'
import Item from './../models/item'
const router = Router()
const items = [
	{
		id: 1,
		nombre: "Item 1",
		descripcion: "Descripcion 1",
	},
	{
		id: 2,
		nombre: "Item 2",
		descripcion: "Descripcion 2",
	},
	{
		id: 3,
		nombre: "Item 3",
		descripcion: "Descripcion 3",
	},
]
router
	.get('/mostrar', mostrarItems)
	.post('/crear', crearItem)

function mostrarItems(req, res) {
	/* ... */
	res.render('Items/items',{items})
}
async function crearItem(req, res){
	const body = req.body 
	try {
		const nuevoItem = await Item.create(body)
		return res.json(nuevoItem)
	} catch (error) {
		return res.status(500).json({
				mensaje: "Error al crear item",	
				error
			});
	}
	// res.redirect('/items/mostrar')
}
/*
.update('./actualizar/:id', actualizarItem)
.delete('./eliminar/:id', eliminarItem)

function actualizarItem(req, res){
	// ---
	res.redirect('/mostrar')
}
function eliminarItem(req, res){
	// ---
	res.redirect('/mostrar')	
}
*/

module.exports = router