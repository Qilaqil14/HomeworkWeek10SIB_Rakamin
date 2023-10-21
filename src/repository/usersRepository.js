const User = require("../models/users");

class UsersRepository {
  static create({ id, title, genres, year, photo }) {
    return User.create({ id, title, genres, year, photo });
  }
  static findById(id) {
    return User.findById(id);
  }
  static findAll() {
    return User.findAll();
  }
  static update(id, { title, genres, year, photo }) {
    return User.update(id, { title, genres, year, photo });
  }
  static delete(id) {
    return User.delete(id);
  }
}

module.exports = UsersRepository;
