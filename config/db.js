//Traer a mongoose como dependecia
const mongoose = require('mongoose')
const colors = require('colors')

//Función para conexión a db
/*
const connectDB = async() =>{
    //Crear el objeto de conexión
    const conn = await mongoose.connect( process.env.MONGO_URL )
    console.log( `MongoDB conectado en el host: ${ conn.connection.host }`.bgMagenta.green );
}*/

//Función para conexión a db
const conectarDB = async() =>{
    //Crear el objeto de conexión
    const conn = await mongoose.connect( 'mongodb://127.0.0.1:27017/devcamp-2687340' )
    console.log( `MongoDB conectado`.bgYellow.blue);
}

//Exportar la función
module.exports = conectarDB

