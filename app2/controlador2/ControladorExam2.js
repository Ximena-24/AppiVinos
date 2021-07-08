const ModeloExamen = require('../modelos2/ModeloExam2');

function index2(req,res) {

    console.log('OK');
    ModeloExamen.find({})
    .then(examenes => {
        if(examenes.length) return res.status(200).send({examenes});
        return res.status(204).send({message: 'No hay datos que mostrar'})
    }).catch(error => res.status(500).send({error}));
}

function crear2(req,res) {
    new ModeloExamen(req.body).save()
    .then(examenes => res.status(200).send({examenes}))
    .catch(error => res.status(500).send({error}));
}

function buscar2(req,res,next) {
    let consulta = {};
    consulta[req.params.key] = req.params.value;
    ModeloExamen.find(consulta).then(examenes => {
        if(!examenes.length) return next();
        req.body.examenes = examenes;
        return next();
    }).catch(error => {
         req.body.error = error
        next();
    })  
}

function mostrar2(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.examenes) return res.status(404).send({message:'No se encontro la materia'});
    let examenes = req.body.examenes;
    return res.status(200).send({examenes});
}

function actualizar2(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.examenes) res.status(404).send({message:'No se puede actualizar la materia'});
    let examenObj = req.body.examenes[0];
    examenObj = Object.assign(examenObj,req.body);
    examenObj.save().then(examenAlta =>{
        res.status(200).send({message: 'El registro se actualizo correctamente',examenAlta});
    }).catch(error => res.status(500).send({error}));

}

function eliminar2(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.examenes) return res.status(404).send({message: 'No se puede eliminar el registro'});
    req.body.examenes[0].remove().then(examenEliminar => {
        res.status(200).send({message:'Eliminado Correctamente', examenEliminar});
    }).catch(error => res.status(500).send({error}));

}


module.exports={
    index2,
    crear2,
    buscar2,
    mostrar2,
    actualizar2,
    eliminar2
}


