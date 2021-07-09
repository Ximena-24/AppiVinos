const express = require ('express');
const RutasVinos = require ('./rutas/RutasVino');
const RutasCoca = require ('./rutas/rutasCoca');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/vinos',RutasVinos);
app.use('/cocas',RutasCoca);

module.exports = app;


