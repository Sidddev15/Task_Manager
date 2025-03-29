const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register function
exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Login Function 
exports.login = async (req,res) => {
    const { email, password } = req.body;
    try {
        // check if user exist
        const user = await User.findOne({ email });
        if(!user) return res.status(400).json({ error: "User Not Found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ error : "Invalid Password" });

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn:'1d'});
        res.status(200).json({ token, user: {id: user._id, username: user.username, email: user.email }});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};