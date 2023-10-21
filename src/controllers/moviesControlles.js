const MovieRepository = require('../repository/moviesRepository')


class MoviesControlles {
  static async createMovies(req, res) {
    try {
      const { id, title, genres, year } = req.body;
      const photo = req.file.filename;
      const movie = await MovieRepository.create({
        id,
        title,
        genres,
        year,
        photo,
      });
      res.status(201).json({message: 'Movies Add'});
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getMoviesId(req, res) {
    try {
      const id = req.params.id;
      const movie = await MovieRepository.findById(id);

      if (movie.rows.length === 0) {
        res.status(404).json({ error: "Movie not found" });
      } else {
        res.json(movie.rows[0]);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getMovies(req, res) {
    try {
      const movies = await MovieRepository.findAll();
      res.json(movies.rows);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  static async updateMovies(req, res) {
    try {
      const id = req.params.id;
      const { title, genres, year} = req.body;
      const movies = await MovieRepository.update(id, {
        title,
        genres,
        year
      });
      if (movies.rows.length === 0) {
        res.status(404).json({ error: "Movie not found" });
      } else {
        res.json(movies.rows[0]);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  static async deleteMovies(req, res) {
    try {
      const id = req.params.id;
      const movie = await MovieRepository.delete(id);
      if (movie.rowCount.length === 0) {
        res.status(404).json({ error: "Movie not found" });
      } else {
        res.json({ message: 'movie delete Succes'});
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
module.exports = MoviesControlles