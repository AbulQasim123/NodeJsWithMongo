const User = require("../models/userModel"); // Import Mongoose model

// Get All Users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from MongoDB
        res.status(200).json({ status: true, data: users });
    } catch (error) {
        res.status(500).json({ status: false, message: "Internal server error", error: error.message });
    }
};

// Get User By ID
exports.getUserById = async (req, res) => {
    try {
        const userId = req.query.userId;
        if (!userId) {
            return res.status(400).json({ status: false, message: "User ID is required" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ status: false, message: "User not found" });
        }

        res.status(200).json({ status: true, data: user });
    } catch (error) {
        res.status(500).json({ status: false, message: "Internal server error", error: error.message });
    }
};

// Create User
exports.createUser = async (req, res) => {
    try {
        const { first_name, last_name, email, gender, job_title } = req.body;

        // Validate input
        if (!first_name || !last_name || !email || !gender || !job_title) {
            return res.status(400).json({ status: false, message: "All fields are required." });
        }

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ status: false, message: "User with this email already exists." });
        }

        // Create new user
        const newUser = new User({ first_name, last_name, email, gender, job_title });
        await newUser.save(); 
        res.status(201).json({ status: true, message: "User created successfully." });
    } catch (error) {
        res.status(500).json({ status: false, message: "Internal server error", error: error.message });
    }
};

// Update User
exports.updateUser = async (req, res) => {
    try {
        const userId = req.query.userId;
        const { first_name, last_name, email, gender, job_title } = req.body;

        if (!userId) {
            return res.status(400).json({ status: false, message: "User ID is required" });
        }

        // Update user in MongoDB
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { first_name, last_name, email, gender, job_title },
            { new: true, runValidators: true } // Return updated document
        );

        if (!updatedUser) {
            return res.status(404).json({ status: false, message: "User not found." });
        }

        res.status(200).json({ status: true, message: "User updated successfully." });
    } catch (error) {
        res.status(500).json({ status: false, message: "Internal server error", error: error.message });
    }
};

// Delete User
exports.deleteUser = async (req, res) => {
    try {
        const userId = req.query.userId;

        if (!userId) {
            return res.status(400).json({ status: false, message: "User ID is required" });
        }

        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ status: false, message: "User not found." });
        }

        res.status(200).json({ status: true, message: "User deleted successfully."});
    } catch (error) {
        res.status(500).json({ status: false, message: "Internal server error", error: error.message });
    }
};