// src/repositories/UserRepository.js
const User = require("../models/users");

class UserRepository {
  static create({ email, gender, password, role }) {
    return User.create({ email, gender, password, role });
  }

  static findById(id) {
    return User.findById(id);
  }

  static findByEmail(email) {
    return User.findByEmail(email);
  }

  static findAll() {
    return User.findAll();
  }

  static update({ email, gender, password, role, id }) {
    return User.update({ email, gender, password, role, id });
  }

  static delete(id) {
    return User.delete(id);
  }
}

module.exports = UserRepository;
