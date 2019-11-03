import { Router } from 'express'
import Item from './../models/item'
const router = Router()
router
	.get('/mostrar', mostrarItems)
	//API
	.get('/item',items)
	.get('/item/:id', obtenerItem)
	.post('/item', crearItem)
	.put('/item/:id', actualizarItem)
	.delete('/item/:id', eliminarItem)
	//CRUD Vistas
	.get('/crear',(req,res)=>res.render('Items/nuevoItem'))
	.get('/actualizar/:id',mostrarActualizarItem)

async function mostrarItems(req, res) {
	const items = await Item.find()
	res.render('Items/items', { items })
}
async function items(req,res){
	const items = await Item.find();
	res.json(items);
}
async function obtenerItem(req, res) {
	try {
		const _id = req.params.id
		const item = await Item.findById(_id);
		if(!item)
			return res.status(400).json({
				mensaje: "Item no encontrado"
			})
		return res.json(item)
	} catch (error) {
		return res.status(500).json({
			mensaje: "Error al obtener item",
			error
		});
	}
}
async function crearItem(req, res) {
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
}
async function actualizarItem(req, res) {
	const _id = req.params.id
	const body = req.body
	try {
		const itemActualizado = await Item.findByIdAndUpdate(_id, body, { new: true })
		res.json(itemActualizado)
	} catch (error) {
		return res.status(500).json({
			mensaje: "Error al actualizar item",
			error
		});
	}
}

async function eliminarItem(req, res) {
	const _id = req.params.id;
	try {
		const itemEliminado = await Item.findByIdAndDelete({ _id })
		if (!itemEliminado)
			return res.status(400).json({
				mensaje: "Item no encontrado",
			})
		res.json(itemEliminado)

	} catch (error) {
		return res.status(500).json({
			mensaje: "Error al eliminar item",
			error
		});
	}
}
async function mostrarActualizarItem(req,res){
	const _id = req.params.id
	const itemActalizar = await Item.findById(_id)
	res.render('Items/actualizarItem',itemActalizar)
}

module.exports = router