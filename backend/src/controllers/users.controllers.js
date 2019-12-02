const usersCtrl = {};

const UserModel = require("../models/User");

usersCtrl.getUsers = async (req, res) => {
    const users = await UserModel.find();
    res.json(users);
};

usersCtrl.CreateUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new UserModel({
        username: username
    });
    await newUser.save();
    res.json({
        message:'User created'
    })
};

//* Controllers with id

usersCtrl.DeleteUser = async(req, res) => {
    await UserModel.findByIdAndDelete(req.params.id);
    res.json({
      message: "Note Delete"
    });
};


module.exports = usersCtrl;