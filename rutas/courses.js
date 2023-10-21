const express = require('express')
const router = express.Router()

//Endpoints: uri de bootcamps
//
//Obtener todos los cursos
router.get( '/', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Aqui van a mostrarse todos los cursos"
    })
})

//Obtener el curso por id
router.get( '/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" :  `Obteniendo curso con id ${ request.params.id }` 
    })
})

//Crear curso
router.post( '/', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Creando curso"
    })
})

//Actualizar curso por id
router.put( '/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : `Actualizando curso con id ${ request.params.id }`
    })
})

//Eliminar curso por id
router.delete( '/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : `Eliminando curso con id ${ request.params.id }`
    })
})

//Exportar (commonjs) router
module.exports = router