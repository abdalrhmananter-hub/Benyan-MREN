//Admin modle
const Admin = require('../models/Admin');
//joi schema:
const loginSchema = require('../controllers/validation/authAdminValidation');
//JWT
const jwt = require('jsonwebtoken');
//function

const loginController = async (req, res, next) => {
    try {
        //joi validation
        const { error, value } = loginSchema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        });
        if(error)
        {
            return res.status(400).json({
                msg:error.details.map((err)=>err.message),
            });
        }
        //
        const {email,password} = value;
        const admin = await Admin.findOne({email:email}).select('+password'); //+password to convert the status of select to true
        //If User Not Found 
        if(!admin) return res.status(400).json({msg:"Invalid Email Or Password"});
        //Compare Password:
        const matchedPassword = await admin.comparePassword(password);
        //If Password False
        if(matchedPassword) return res.status(400).json({msg:"Invalid Email Or Password"});

        const token = await jwt.sign({id:admin._id}, process.env.JWT_SECRET, {expiressIn:"1d"});
        res.status(200).json({Message:"Success Login", token})
    } catch (error) {

    }
}

module.exports = loginController;