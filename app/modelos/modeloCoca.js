const mongoose = require('mongoose');

const CocasSchema = new mongoose.Schema({
   
   
    codigo:{
        type: Number,
       required:true
    },
    nombre:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required:true
    },
    precio:{
        type: Number,
        default: 5
    },
    fechaRegistro:{
        type: Date,
        require: true
    }
})

const Coca = mongoose.model('Coca', CocasSchema);

module.exports = Coca;