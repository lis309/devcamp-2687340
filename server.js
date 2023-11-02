//Traer dependencias del proyecto
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

//Traer las dependencias de las rutas
const bootcampRoutes = require('./routes/bootcampsRoutes')
const cursosRoutes = require('./routes/coursesRoutes')
const reviewRoutes = require('./routes/reviewsRoutes')
const usersRoutes = require('./routes/usersRoutes')
//Traer dependencia conexión
const conectarDB = require('./config/db')

//Conexión a base de datos mongo
//Traer variables de entorno 
//del /config/.env
dotenv.config({
    path: './config/.env'
})

//Conectar a bd
conectarDB()

//Crear el servidor express
const app = express()

//Habilitar express para recibir body en formato json
app.use(express.json())

app.listen( process.env.PORT, () =>{
    console.log(`Servidor express ejecutando ${ process.env.PORT }`.bgCyan.yellow);
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


