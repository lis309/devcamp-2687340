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

//Crea el servidor de aplicación
app.listen( 5000, console.log('servidor ejecutando en puerto' + 5000))