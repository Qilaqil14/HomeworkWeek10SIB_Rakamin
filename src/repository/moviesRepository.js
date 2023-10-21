const Movie = require('../models/movies')

class MovieRepository {
    static create({ id, title, genres, year, photo}) {
        return Movie.create({ id, title, genres, year, photo });
    }
    static findById(id) {
        return Movie.findById(id)
    }
    static findAll() {
        return Movie.findAll()
    }
    static update(id,{title, genres, year}){
        return Movie.update( id,{ title, genres, year });
    }
    static delete(id){
        return Movie.delete(id)
    }
}

module.exports = MovieRepository