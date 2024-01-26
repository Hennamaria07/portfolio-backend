const User = require('../models/usersModel');

const postRegister = async (req, res) => {
    const {fullname, email, phone, message} = req.body; 
    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email is already taken",
            });
        }
        const user = await User.create({
            fullname,
            email,
            phone,
            message
        })
        console.log(user);
        if(!user){
            return res.status(500).json({
                success: false,
                message: "Oops something went wrong"
            });
        }
        res.status(201).json({
                success: true,
                message:"Form submitted Successfully!",
                user
            });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    postRegister
};