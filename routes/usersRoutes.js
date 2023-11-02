const express = require('express')
const router = express.Router()

//Endpoints: uri de bootcamps
//
//Obtener todos los usuarios
router.get( '/', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Aqui van a mostrarse todos los usuarios"
    })
})

//Obtener el usuario por id
router.get( '/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" :  `Obteniendo usuario con id ${ request.params.id }` 
    })
})

//Crear usuario
router.post( '/', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Creando usuario"
    })
})

//Actualizar usuario por id
router.put( '/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : `Actualizando usuario con id ${ request.params.id }`
    })
})

//Eliminar usuario por id
router.delete( '/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : `Eliminando usuario con id ${ request.params.id }`
    })
})

//Exportar (commonjs) router
module.exports = router