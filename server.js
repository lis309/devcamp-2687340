const express = require('express')
const bootcampRoutes = require('./rutas/bootcamps')
const cursosRoutes = require('./rutas/courses')
const reviewRoutes = require('./rutas/reviews')
const usersRoutes = require('./rutas/users')

//Crear el objeto principal de la api
const app = express()

//Vincular rutas al objeto app
//Bootcamps
app.use("/api/v1/devcamp/bootcamps", bootcampRoutes)
//Courses
app.use("/api/v1/devcamp/cursos", cursosRoutes)
//Reviews
app.use("/api/v1/devcamp/review", reviewRoutes)
//Users
app.use("/api/v1/devcamp/users", usersRoutes)

//Crea el servidor de aplicación
app.listen( 5000, console.log('servidor ejecutando en puerto' + 5000))


