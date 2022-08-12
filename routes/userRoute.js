const express = require("express");
const router = express();
const userControllers = require("../controllers/userControllers");

router.get("/", userControllers.getAllUsers);
router.post("/", userControllers.postUser);
router.get("/:id", userControllers.getUserById);
router.delete("/:id", userControllers.deleteUserById);

module.exports = router;
