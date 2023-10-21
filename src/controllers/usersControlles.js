// src/controllers/UserController.js
const UserRepository = require("../repository/usersRepository");

class UserController {
  static async createUser(req, res) {
    try {
      const { email, gender, password, role } = req.body;

      // Pastikan email unik sebelum membuat pengguna baru
      const existingUser = await UserRepository.findByEmail(email);
      if (existingUser.rows.length > 0) {
        return res.status(400).json({ error: "Email already in use" });
      }

      const user = await UserRepository.create({
        email,
        gender,
        password,
        role,
      });

      res.status(201).json(user.rows[0]);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getUsers(req, res) {
    try {
      const users = await UserRepository.findAll();
      res.json(users.rows);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getUser(req, res) {
    try {
      const id = req.params.id;
      const user = await UserRepository.findById(id);

      if (user.rows.length === 0) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json(user.rows[0]);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async updateUser(req, res) {
    try {
      const id = req.params.id;
      const { email, gender, password, role } = req.body;

      const user = await UserRepository.update({
        email,
        gender,
        password,
        role,
        id,
      });

      if (user.rows.length === 0) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json(user.rows[0]);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async deleteUser(req, res) {
    try {
      const id = req.params.id;
      const result = await UserRepository.delete(id);

      if (result.rowCount === 0) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json({ message: "User deleted successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = UserController;
