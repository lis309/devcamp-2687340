//Traer dependencias
const express = require('express')
const dotenv = require('dotenv')

//Traer las rutas
const bootcampRoutes = require('./rutas/bootcamps')
const cursosRoutes = require('./rutas/courses')
const reviewRoutes = require('./rutas/reviews')
const usersRoutes = require('./rutas/users')
//Traer la conexión
const connectDB = require('./config/db')

//Conexión a base de datos mongo
//Traer variables de entorno 
//del /config/.env
dotenv.config({
    path: './config/.env'
})

connectDB()

//Crear el servidor express
const app = express()

app.listen( process.env.PORT, () =>{
    console.log(`Servidor ejecutando en puerto: ${ process.env.PORT }`.bgCyan.red.rainbow);
})

//Vincular rutas al objeto app
//Bootcamps
app.use("/api/v1/devcamp/bootcamps", bootcampRoutes)
//Courses
app.use("/api/v1/devcamp/cursos", cursosRoutes)
//Reviews
app.use("/api/v1/devcamp/review", reviewRoutes)
//Users
app.use("/api/v1/devcamp/users", usersRoutes)


