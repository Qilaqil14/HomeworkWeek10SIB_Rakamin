const MovieRepository = require("../repository/usersRepository");

class UsersControlles {
  static async createUsers(req, res) {
    try {
      const { id, email, gender, password, role } = req.body;
      const user = await UsersRepository.create({
        id,
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

  static async getUsersId(req, res) {
    try {
      const id = req.params.id;
      const user = await UsersRepository.findById(id);

      if (user.rows.length === 0) {
        res.status(404).json({ error: "Movie not found" });
      } else {
        res.json(user.rows[0]);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getUsers(req, res) {
    try {
      const user = await UsersRepository.findAll();
      res.json(user.rows);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  static async updateUsers(req, res) {
    try {
      const id = req.params.id;
      const { title, genres, year } = req.body;
      const user = await UserRepository.update(id, {
        title,
        genres,
        year,
      });
      if (user.rows.length === 0) {
        res.status(404).json({ error: "Movie not found" });
      } else {
        res.json(user.rows[0]);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  static async deleteUsers(req, res) {
    try {
      const id = req.params.id;
      const user = await UsersRepository.delete(id);
      if (user.rowCount.length === 0) {
        res.status(404).json({ error: "Movie not found" });
      } else {
        res.json({ message: "movie delete Succes" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
module.exports = UsersControlles;
