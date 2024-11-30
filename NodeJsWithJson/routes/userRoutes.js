const express = require("express");
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);
router.get("/get-user", getUserById);
router.post("/create-user", createUser);
router.patch("/update-user", updateUser);
router.delete("/delete-user", deleteUser);

module.exports = router;