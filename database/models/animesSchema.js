const { Schema, model } = require('mongoose')

const charactersSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    age: {type: Number, required: true}
})

const animesSchema = new Schema({
    id: { type: String, required: true },
    title: {type: String, required:true},
    protagonist: {type: String, required:true},
    genre: {type: String, required:true},
    seasons: {type: String, required:true},
    year: { type: Number, required: true },
    characters: {type: [charactersSchema], required: true},
    createdAt: {type: Date, default: Date.now()}
})

const Anime = model("Anime", animesSchema)

module.exports = Anime