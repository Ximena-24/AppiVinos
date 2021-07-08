const express = require ('express');
const RutasExam2 = require ('./rutas2/RutasExam2');


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/examenes',RutasExam2);

module.exports = app;

