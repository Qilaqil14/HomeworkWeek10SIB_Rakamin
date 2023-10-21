// src/models/User.js
const db = require("../config/database");

class User {
  static create({ email, gender, password, role }) {
    return db.query(
      "INSERT INTO users (email, gender, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
      [email, gender, password, role]
    );
  }

  static findById(id) {
    return db.query("SELECT * FROM users WHERE id = $1", [id]);
  }

  static findByEmail(email) {
    return db.query("SELECT * FROM users WHERE email = $1", [email]);
  }

  static findAll() {
    return db.query("SELECT * FROM users");
  }

  static update({ email, gender, password, role, id }) {
    return db.query(
      "UPDATE users SET email = $1, gender = $2, password = $3, role = $4 WHERE id = $5",
      [email, gender, password, role, id]
    );
  }

  static delete(id) {
    return db.query("DELETE FROM users WHERE id = $1", [id]);
  }
}

module.exports = User;
