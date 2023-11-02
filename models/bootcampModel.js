const mongoose = require('mongoose')

//Definir el esquema
//Plano general de todo bootcamp

const bootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "nombre requerido" ],
        unique: [ true, "nombre repetido" ]
    },
    phone:{
        type: Number,
        required: [ true, "telefono requerido" ],
        maxlength: [10, "telefono muy largo"]
    },
    address:{
        type: String,
        required: [ true, "dirección requerido" ],
        maxlength: [50, "dirección muy larga"],
        minlength: [10, "dirección muy corta"]
    },
    topics:{
        type: [ String ],
        enum: [ "AI", "Backend", "Frontend", "Devops" ]
    },
    createdAt: Date
})

//Exportar el modelo
const bootcampModel = mongoose.model("Bootcamp", bootcampSchema)

module.exports = bootcampModel