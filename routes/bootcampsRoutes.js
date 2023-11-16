const express = require('express')
const BootcampModel = require('../models/bootcampModel')
//const { default: mongoose } = require('mongoose')
//Definir mongoose
const mongoose = require('mongoose')
//Definir routeador
const router = express.Router()

//Endpoints: uri de bootcamps
//Definir rutas de bottcamps con el ruteador

//Obtener todos los bootcamps
router.get( '/', async (request, response) => {
    //Seleccionar todos los bootcamps en la collection
    try {
        const bootcamps = await BootcampModel.find()
        if (bootcamps.length === 0) {
            response.status(400).json({
                sucess: false,
                msg: "No hay bootcamps en la collection"
            })
        }else{
            response.status(200).json({
                success : true,
                result : bootcamps
            })
        }
    } catch (error) {
        response.status(error.status).json({
            success: false,
            msg: error.message
        })
    }   
})

//Seleccionar bootcamp por id
router.get( '/:id', async (request, response) => {
    try {
        //Recoger el parametro id de la url
        bootcampid = request.params.id
        //Validar el id suministrado
        if (!mongoose.Types.ObjectId.isValid(bootcampid)) {
            response.status(400).json({
                success: false,
                msg: "El id no es válido"
            })
        }else{
            //Seleccionar el bootcamp por id
            selected_bootcamp = await BootcampModel.findById(bootcampid)
            //Enviar respuesta
            if (selected_bootcamp) {
                //Seencontro el bootcamp
                response.status(200).json({
                    success : true,
                    results :  selected_bootcamp
                })
            }else{
                //No se encontro el bootcamp
                response.status(400).json({
                    sucess: false,
                    msg: `No encontro el bootcamp ${bootcampid}`
                })
            }
        }   
        
    } catch (error) {
        response.status(500).json({
            success: false,
            msg: error.message
        })
    }
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