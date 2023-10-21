const router = require("express").Router();
const usersControlles = require("../controllers/usersControlles");

router.post("/", usersControlles.createUsers);
router.get("/:id", usersControlles.getUsersId);
router.get("/", usersControlles.getUsers);
router.put("/:id", usersControlles.updateUsers);
router.delete("/:id", usersControlles.deleteUsers);

module.exports = router;
