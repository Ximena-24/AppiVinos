const mongoose = require('mongoose');

const ExamenSchema = new mongoose.Schema({
    materia:{
        type: String,
       required:true
    },
    codigo:{
        type: Number,
        required: true
    },
    precio:{
        type: Number,
        required:true
    },
    existencia:{
        type: Number,
        default: 5
    }
})

const Examen = mongoose.model('Examen', ExamenSchema);

module.exports = Examen;