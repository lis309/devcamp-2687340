const express = require('express')

//Crear el objeto principal de la api
const app = express()

//url de prueba
app.get( '/prueba', function(request, response){
    response.send('Hola')
})

app.get( '/prueba2', (request, response) =>{
    response.status(200).json({
        "sucess" : true
    })
})

//Ruta del recurso bootcamps

//Obtener todos los bootcamps
app.get( '/api/v1/devcamp/bootcamps', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Aqui van a mostrarse todos los bootcamps"
    })
})

//Obtener el bootcamp por id
app.get( '/api/v1/devcamp/bootcamps/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" :  `Obteniendo bootcamp con id ${ request.params.id }` 
    })
})

//Crear bootcamp
app.post( '/api/v1/devcamp/bootcamps', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Creando bootcamp"
    })
})

//Actualizar bootcamp
app.put( '/api/v1/devcamp/bootcamps', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Actualizando bootcamp"
    })
})

//Eliminar bootcamp
app.delete( '/api/v1/devcamp/bootcamps', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Eliminando bootcamp"
    })
})


//Ruta del recurso cursos

//Obtener todos los cursos
app.get( '/api/v1/devcamp/cursos', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Aqui van a mostrarse todos los cursos"
    })
})

//Obtener el curso por id
app.get( '/api/v1/devcamp/cursos/:id', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" :  `Obteniendo cursos con id ${ request.params.id }` 
    })
})

//Crear curso
app.post( '/api/v1/devcamp/cursos', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Creando curso"
    })
})

//Actualizar curso
app.put( '/api/v1/devcamp/cursos', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Actualizando curso"
    })
})

//Eliminar curso
app.delete( '/api/v1/devcamp/cursos', (request, response) =>{
    response.status(200).json({
        "sucess" : true,
        "msg" : "Eliminando curso"
    })
})

//Crea el servidor de aplicación
app.listen( 5000, console.log('servidor ejecutando en puerto' + 5000))

