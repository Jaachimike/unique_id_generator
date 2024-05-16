const User = require('../models/user');

const generateUniqueId = async () => {
    while (true) {
        const uniqueId = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit number
        const existingUser = await User.findOne({ where: { uniqueId } });
        if (!existingUser) {
            return uniqueId;
        }
    }
};


exports.createUser = async (req, res) => {
    try {
        const uniqueId = await generateUniqueId();
        const user = await User.create({ ...req.body, uniqueId });
        res.status(201).json({ uniqueId });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUserById = async (req, res) => {
    try {
        const { uniqueId } = req.params;
        const user = await User.findOne({ where: { uniqueId } });
        if (user) {
            await user.destroy();
            res.status(200).json({ message: `User with unique ID ${uniqueId} deleted successfully.` });
        } else {
            res.status(404).json({ error: `User with unique ID ${uniqueId} not found.` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};