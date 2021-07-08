const mongoose = require('mongoose');
const CONFIG = require('../configuracion2/config2');

module.exports={
    connection : null, 
    connect: function(){
        if(this.connection) return  this.connection
        return mongoose.connect(CONFIG.BD).then(conexion =>{
            this. connection = conexion;
            console.log('Conexion Correctamente Funcional');
        }).catch(error => console.log(error));
    }
}