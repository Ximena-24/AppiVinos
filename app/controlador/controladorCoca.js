const ModeloCocas = require('../modelos/modeloCoca');

function index(req,res) {

    console.log('OK');
    ModeloCocas.find({})
    .then(cocas => {
        if(cocas.length) return res.status(200).send({cocas});
        return res.status(204).send({message: 'No hay datos que mostrar'})
    }).catch(error => res.status(500).send({error}));
}

function crear(req,res) {
    new ModeloCocas(req.body).save()
    .then(cocas => res.status(200).send({cocas}))
    .catch(error => res.status(500).send({error}));
}

function buscar(req,res,next) {
    let consulta = {};
    consulta[req.params.key] = req.params.value;
    ModeloCocas.find(consulta).then(cocas => {
        if(!cocas.length) return next();
        req.body.cocas = cocas;
        return next();
    }).catch(error => {
         req.body.error = error
        next();
    })  
}

function mostrar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cocas) return res.status(404).send({message:'No se encontro la coca'});
    let cocas = req.body.cocas;
    return res.status(200).send({cocas});
}

function actualizar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cocas) res.status(404).send({message:'No se puede actualizar la coca'});
    let cocaObj = req.body.cocas[0];
    cocaObj = Object.assign(cocaObj,req.body);
    cocaObj.save().then(cocasAlta =>{
        res.status(200).send({message: 'El registro se actualizo correctamente',cocasAlta});
    }).catch(error => res.status(500).send({error}));

}

function eliminar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cocas) return res.status(404).send({message: 'No se puede eliminar la coca'});
    req.body.cocas[0].remove().then(cocasEliminar => {
        res.status(200).send({message:'Eliminado Correctamente', cocasEliminar});
    }).catch(error => res.status(500).send({error}));

}



module.exports={
    index,
    crear,
    buscar,
    mostrar,
    actualizar,
    eliminar
}



