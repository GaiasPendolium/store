const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema);
