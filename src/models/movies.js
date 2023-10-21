const database = require('../config/database')

class Movie {
  static create({ id, title, genres, year, photo }) {
    return database.query(
      "INSERT INTO movies (id, title, genres, year, photo) VALUES ($1, $2, $3, $4, $5)",
      [id, title, genres, year, photo]
    );
  }

  static findById(id) {
    return database.query("SELECT * FROM movies WHERE id = $1", [id]);
  }

  static findAll() {
    return database.query("SELECT * FROM movies");
  }
  static update({title, genres, year, id}) {
    return database.query(
      "UPDATE movies SET title = $1, genres = $2, year = $3 WHERE id = $4",
      [title, genres, year, id]
      );
  }
  static delete(id) {
    return database.query("DELETE FROM movies WHERE id = $1", [id]);
  }
}
module.exports = Movie