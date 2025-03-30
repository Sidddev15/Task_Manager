require('dotenv').config();

const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

// CONNECT DATABASE
connectDB();

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("Task manager API is running...");
});

app.listen(PORT, () => {
    console.log(`Server is up and running on port http://localhost:${PORT}`);
})