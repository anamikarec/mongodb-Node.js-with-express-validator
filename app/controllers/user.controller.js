const User = require("../models/user.model")
const {validationResult} = require("express-validator")
const getUsers = async (req,res) => {
    try{
        const users = await User.find().exec();
        return res.status(200).json(users);
    }
   catch(err){
    return res.status(400).json({"msg":"Something went wrong!"});
   }
} 
const createUser = async (req,res) => {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        const user = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age: req.body.age,
            email: req.body.email
        })
        console.log(user);
        return res.status(200).json(user);
    }
    catch (err) {
        return res.status(400).json({"msg":"Something went wrong!"});
    }
}
module.exports ={
    getUsers: getUsers,
    createUser: createUser
}