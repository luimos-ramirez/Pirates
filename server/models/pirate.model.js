const mongoose = require("mongoose");

const message = "field is requerid"

const EsquemaPirate = new mongoose.Schema({
    name: {
        type: String,
        required: [true, message], //Validación
        minLength: [3, "Phrase must have at least 3 characters"] //Validación
    },
    image: {
        type: String,
        required: [true, message], //Validación
        minLength: [3, "Phrase must have at least 3 characters"] //Validación
    },
    treasures: {
        type: Number,
        required: [true, message], //Validación
    },
    phrase: {
        type: String,
        required: [true, message], //Validación
        minLength: [3, "Phrase must have at least 3 characters"] //Validación
    },
    position: {
        type: String,
        required: [true, message], //Validación
    },
    leg: {
        type: Boolean,
        default: true
    },
    patch: {
        type: Boolean,
        default: true
    },
    hand: {
        type: Boolean,
        default: true
    }
}, {timestamps: true, versionKey:false})
//timestamps: true es para createdAt y updatedAt
//versionKey: false es para eliminar un campo _v

const Pirate = mongoose.model("pirates", EsquemaPirate);
module.exports = Pirate;
