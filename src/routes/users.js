// src/routes/userRoutes.js
const express = require("express");
const UserController = require("../controllers/usersControlles");

const router = express.Router();

router.post("/", UserController.createUser);
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
