const User = require('./../models/users.model');
const { v4: uuidv4 } = require('uuid');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getOneUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({ id: id });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.createUser = async (req, res) => {
    try {
        const { name, age } = req.body;
        const newUser = new User({
            id: uuidv4(),
            name: name,
            age: Number(age)
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, age } = req.body;
        const user = await User.findOne({ id: id });
        user.name = name;
        user.age = Number(age);        
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ id: id });
        res.status(200).json({
            message: "User is deleted!"
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}