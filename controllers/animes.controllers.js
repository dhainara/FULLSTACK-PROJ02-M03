import { animesService } from "../services/animes.services.js"
import { Anime } from "../database/models/animesSchema.js"

async function findAllAnimes(req, res) {
    try {
        const allAnimes = await animesService.findAllAnimes()
        res.status(200).send(allAnimes)
    } catch (err) {
        console.log(err)
        res.status(500).send({message: 'Não há animes registrados. Vá para http://localhost:3000/create-anime e cadastre um anime agora!'})
    }
    
}

async function findAnimeById(req, res) {
    const id = +req.params.id
    const selectedAnime = await animesService.findAnimeById(id)

    let count = Anime.length

    if (selectedAnime) {
        res.status(200).send(selectedAnime)
    } else {
        res.status(400).send({message: `Nenhum anime com esse id foi encontrado.\nHá ${count} id's registrados. Verifique a lista e tente novamente com um id existente!`})
    }
}

async function createAnime(req, res) {
    try {
        const anime = req.body
        const createeAnime = await animesService.createAnime(anime)
        res.status(200).send(createeAnime)
    } catch (err) {
        console.log(err)
        res.status(400).send({message: err.message})
    }
}

async function updateAnime(req, res) {
    try {
        const anime = req.body
        const updatedAnime = await animesService.updateAnime(anime)
        res.status(200).send(updatedAnime)
    } catch (err) {
        console.log(err)
        res.status(400).send({message: err.message})
    }
}

async function deleteAnime(req, res) {
    try {
        const id = req.params.id
        const deletedAnime = await animesService.deleteAnime(id)
        res.send(deletedAnime)
    } catch (err) {
        let count = animes.length
        console.log(err)
        res.status(400).send({message: `Nenhum anime com esse id foi encontrado.\nHá ${count} id's registrados. Verifique a lista e tente novamente com um id existente!`})
    }
}

export const animesController = {findAllAnimes,
    findAnimeById,
    createAnime,
    updateAnime,
    deleteAnime
}