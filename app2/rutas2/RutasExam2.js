const express = require('express');
const ControladorExamenes = require('../controlador2/ControladorExam2');

const Router = express.Router();

Router.get('/',ControladorExamenes.index2)
.post('/',ControladorExamenes.crear2)
.get('/:key/:value',ControladorExamenes.buscar2,ControladorExamenes.mostrar2)
.put('/:key/:value',ControladorExamenes.buscar2,ControladorExamenes.actualizar2)
.delete('/:key/:value',ControladorExamenes.buscar2,ControladorExamenes.eliminar2);


module.exports = Router;
