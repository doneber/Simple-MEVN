import { Router } from 'express'
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
	.get('/mostrar', mostrarItems);
function mostrarItems(req, res) {
	/* ... */
	res.render('Items/items',{items})

}
/*
router
	.post('./crear', crearItem)
	.update('./actualizar/:id', actualizarItem)
	.delete('./eliminar/:id', eliminarItem)

function crearItem(req, res){
	// ---
	res.redirect('/mostrar')
}
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