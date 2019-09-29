import { Router } from 'express'
import Item from './../models/item'
const router = Router()
router
	.get('/mostrar', mostrarItems)
	//CRUD
	.get('/obtener/:id', obtenerItem)
	.post('/crear', crearItem)
	.put('/actualizar/:id', actualizarItem)
	.delete('/eliminar/:id', eliminarItem)


async function mostrarItems(req, res) {
	const items = await Item.find()
	console.log(items)
	res.render('Items/items', { items })
}
async function obtenerItem(req, res) {
	try {
		const _id = req.params.id
		const nota = await Item.findById(_id);
		if(!nota)
			return res.status(400).json({
				mensaje: "Item no encontrado"
			})
		return res.json(nota)
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

module.exports = router