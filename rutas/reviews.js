const express = require('express')
const router = express.Router()

//Endpoints: uri de bootcamps
//
//Obtener todos las reseñas
router.get( '/', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Aqui van a mostrarse todos las reseñas"
    })
})

//Obtener el reseña por id
router.get( '/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" :  `Obteniendo reseña con id ${ request.params.id }` 
    })
})

//Crear reseña
router.post( '/', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Creando reseña"
    })
})

//Actualizar reseña por id
router.put( '/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : `Actualizando reseña con id ${ request.params.id }`
    })
})

//Eliminar reseña por id
router.delete( '/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : `Eliminando reseña con id ${ request.params.id }`
    })
})

//Exportar (commonjs) router
module.exports = router