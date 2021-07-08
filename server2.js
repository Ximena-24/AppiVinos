const app = require('./app2/app2');
const CONFIG = require('./app2/configuracion2/config2');
const morgan = require('morgan');
const conexion = require("./app2/configuracion2/conexion2");

conexion.connect();

app.use(morgan('dev'));

app.listen(CONFIG.PORT,function(erro){
if(erro) return console.log(error);
console.log(`Servidor en el puerto ${CONFIG.PORT}`);

});



