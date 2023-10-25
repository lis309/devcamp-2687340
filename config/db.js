//Traer a mongoose como dependecia
const mongoose = require('mongoose')
const colors = require('colors')

//Función para conexión a db
const connectDB = async() =>{
    //Crear el objeto de conexión
    const conn = await mongoose.connect( process.env.MONGO_URL )
    console.log( `MongoDB conectado en el host: ${ conn.connection.host }`.bgMagenta.green );
}

//Exportar la función
module.exports = connectDB

