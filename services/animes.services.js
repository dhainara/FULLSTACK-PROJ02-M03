import animes from "../mocks/animes.js"
import { Anime } from "../database/models/animesSchema.js"
import CharacterEntity from "../entities/characters.entity.js"
import AnimeEntity from "../entities/animes.entity.js"


async function findAllAnimes() {
    console.log('findAllAnimes executado.')
    return await Anime.find()
}

async function findAnimeById(id) {
    console.log('findAnimesById executado.')
    const anime = await Anime.findOne({id:id})
    return anime
}

async function createAnime(anime) {
    console.log('createAnime executado.')
    const newAnime = new AnimeEntity(anime)
    newAnime.validateAnime()
    //validação de character caso ele exista
    
    let newCharacters = []

    anime.characters.map((character) => {
        const newCharacter = new CharacterEntity(character)
        newCharacter.validateCharacter()
        newCharacters.push(newCharacter.getCharacter())
    })     

    const createdAnime = {
        ...newAnime.getAnime(),
        characters: newCharacters,
    }

    const animeCreatedpush = await Anime.create(createdAnime)

    return animeCreatedpush
}

async function updateAnime(anime) {
    console.log('updateAnime executado.')

    const updateAnime = new AnimeEntity(anime)
    updateAnime.validateAnime()

    if (!anime.characters) {
        res.send({message:"Personagens precisam ser informados."})
    }

    const updatedCharacters = []

    anime.characters.map((character) => {
        const updatedCharacter = new CharacterEntity(character)
        updatedCharacter.validateCharacter()
        updatedCharacters.push(updatedCharacter.getCharacter())
    })  

    const updatedAnime = {
        ...updateAnime.getAnime(),
        characters: updatedCharacters
    }

    const animeUpdatedInDatabase = await Anime.findOneAndUpdate(
        { id: anime.id },
        updatedAnime,
        { new: true }
    )

    return animeUpdatedInDatabase

}

async function deleteAnime(id) {
    console.log('deleteAnime executado.')

    const anime = await Anime.findOneAndDelete({id:id})
}

export const animesService = {
    findAllAnimes,
    findAnimeById,
    createAnime,
    updateAnime,
    deleteAnime
}