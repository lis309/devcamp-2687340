const express = require('express')
const router = express.Router()

//Endpoints: uri de bootcamps
//
//Obtener todos los bootcamps
router.get( '/', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Aqui van a mostrarse todos los bootcamps"
    })
})

//Obtener bootcamp por id
router.get( '/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" :  `Obteniendo bootcamp con id ${ request.params.id }` 
    })
})

//Crear bootcamp
router.post( '/', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Creando bootcamp"
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

//Exportar (commonjs) router
module.exports = router