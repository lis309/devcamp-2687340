const express = require('express')
const BootcampModel = require('../models/bootcampModel')
//Definir routeador
const router = express.Router()

//Endpoints: uri de bootcamps
//Definir rutas de bottcamps con el ruteador

//Obtener todos los bootcamps
router.get( '/', async (request, response) => {
    //Seleccionar todos los bootcamps en la collection
    const bootcamps = await BootcampModel.find()
    response.json({
        success : true,
        result : bootcamps
    })
})

//Seleccionar bootcamp por id
router.get( '/:id', async (request, response) => {
    //Recoger el parametro id de la url
    bootcampid = request.params.id
    //Seleccionar el bootcamp por id
    selected_bootcamp = await BootcampModel.findById(bootcampid)
    //Enviar respuesta
    response.json({
        success : true,
        results :  selected_bootcamp
    })
})

//Crear bootcamp
router.post( '/', async (request, response) => {
    const newBootcamp = await BootcampModel.create(request.body)
    response.json({
        success : true,
        results : newBootcamp
    })
})

//Actualizar bootcamp por id
router.put( '/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" :  `Actualizando bootcamp con id ${ request.params.id }` 
    })
})

//Eliminar bootcamp por id
router.delete( '/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : `Eliminando usuario con id ${ request.params.id }`
    })
})

//Exportar ruteador
module.exports = router