const express = require("express");
const { connectMongoDB } = require("./config/connection");
const userRoutes = require("./routes/userRoutes");


const app = express();
const port = 5000;
// Middleware
app.use(express.json());

// MongoDB Connectioncls
connectMongoDB("mongodb://localhost:27017/LearnNode");
// Routes
app.use("/api/users", userRoutes);

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});