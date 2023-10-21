const database = require("../config/database");

class User {
  static create({ id, title, genres, year, photo }) {
    return database.query(
      "INSERT INTO users (id, title, genres, year, photo) VALUES ($1, $2, $3, $4, $5)",
      [id, title, genres, year, photo]
    );
  }

  static findById(id) {
    return database.query("SELECT * FROM users WHERE id = $1", [id]);
  }

  static findAll() {
    return database.query("SELECT * FROM users");
  }
  static update(id, { title, genres, year, photo }) {
    return database.query(
      "UPDATE users SET title = $1, genres = $2, year = $3 , photo = $4 WHERE id = $5",
      [title, genres, year, photo, id]
    );
  }
  static delete(id) {
    return database.query("DELETE FROM users WHERE id = $1", [id]);
  }
}
module.exports = User;
