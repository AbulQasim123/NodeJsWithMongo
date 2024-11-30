const fs = require("fs");
const users = require("../MOCK_DATA.json");

// Get All Users
exports.getUsers = (req, res) => {
    return res.status(200).json({ status: true, data: users });
};

// Get User By ID
exports.getUserById = (req, res) => {
    const id = parseInt(req.query.userId);
    if (!id) {
        return res.status(400).json({ status: false, error: "User ID is required" });
    }
    const user = users.find((user) => user.id === id);
    if (!user) {
        return res.status(404).json({ status: false, error: "User not found" });
    }
    return res.status(200).json({ status: true, data: user });
};

// Create User
exports.createUser = (req, res) => {
    const { id, first_name, last_name, email, gender, job_title } = req.body;
    if (!id || !first_name || !last_name || !email || !gender || !job_title) {
        return res.status(400).json({ status: false, message: "All fields are required." });
    }
    if (users.find((user) => user.id === id)) {
        return res.status(400).json({ status: false, message: "User with this ID already exists." });
    }

    const newUser = { id, first_name, last_name, email, gender, job_title };
    users.push(newUser);
    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
    res.status(201).json({ status: true, message: "User created successfully." });
};

// Update User
exports.updateUser = (req, res) => {
    const id = parseInt(req.query.userId);
    const { first_name, last_name, email, gender, job_title } = req.body;

    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ status: false, message: "User not found." });
    }

    const user = users[userIndex];
    const updatedUser = {
        ...user,
        first_name: first_name || user.first_name,
        last_name: last_name || user.last_name,
        email: email || user.email,
        gender: gender || user.gender,
        job_title: job_title || user.job_title,
    };

    users[userIndex] = updatedUser;
    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
    res.json({ status: true, message: "User updated successfully." });
};

// Delete User
exports.deleteUser = (req, res) => {
    const id = parseInt(req.query.userId);
    if (!id) {
        return res.status(400).json({ status: false, error: "User ID is required" });
    }

    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ status: false, message: "User not found." });
    }

    users.splice(userIndex, 1);
    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
    res.json({ status: true, message: "User deleted successfully." });
};