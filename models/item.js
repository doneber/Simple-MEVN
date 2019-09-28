import {Schema, model} from 'mongoose'

const itemSchema = new Schema({
    nombre: {type: String, required:true},
    descripcion: {type: String},
})

const Item = model('Item', itemSchema)
export default Item