require('dotenv').config();

const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db')

// CONNECT DATABASE
connectDB();

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Task manager API is running...");
});

app.listen(PORT, ()=> {
    console.log(`Server is up and running on port http://localhost:${PORT}`);
})