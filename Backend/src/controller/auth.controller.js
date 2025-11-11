const userModel=require("../models/user.model")
const foodPartnerModel=require("../models/foodPartner.model")

const bcrypt=require("bcryptjs")
const jwt= require("jsonwebtoken");


async function registerUser(req,res){

    const {fullName,email,password}=req.body;
    const isUserAlreadyExist= await userModel.findOne({email});
    
    if(isUserAlreadyExist){
        return res.status(400).json({
            message:"User Already Exists"
        })
    }
    const hashedPassword= await bcrypt.hash(password,10);

    const user= await userModel.create({
        fullName,
        email,
        password: hashedPassword
    })

    const token= jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message:"user registered successfully",
        user:{
            _id:user._id,
            fullName:user.fullName,
            email:user.email
        }

    })
}


async function loginUser(req,res){
    const {email,password}=req.body;
    const user= await userModel.findOne({email});

    if(!user){
       return res.status(400).json({
            message:"Incorrect email  or password"
        })
    }

    const isPasswordValid= await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return res.status(400).json({
            message:"Incorrect email  or password"})
    }

    const token= jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message:"user loged in successfully",
        user:{
            _id:user._id,
            fullName:user.fullName,
            email:user.email
        }

    })

}

async function logoutUser(req,res) {
    res.clearCookie("token");
    res.status(200).json(
        {
            message:"User Loged out successfully"
        }
    );

    
}
// Food Partner register controller
async function foodPartnerRegister(req,res) {
    const{Name,email,password}=req.body;
    const isUserAlreadyExist= await foodPartnerModel.findOne({email});
    if(isUserAlreadyExist)
    {
        res.status(200).json({
            message:"Usaer Already exist"
        });
    }

    const hashedPassword= await bcrypt.hash(password,10);

    const user=foodPartnerModel.create({
        Name,
        email,
        password:hashedPassword
    })

    const token=jwt.sign({
        id: user._id,
    },process.env.JWT_SECRET)

    res.cookie("token",token)
    res.status(201).json({
        message:"PartnerUser Register SuccessFully",
        user:{
            _id:user._id,
            Name: user.Name,
            email:user.email

        }
    })
    
}


// Food Partner login controller
async function foodPartnerLogin(req,res) {

     const {Name,email,password}=req.body;
    const user= await foodPartnerModel.findOne({email});

    if(!user){
       return res.status(400).json({
            message:"Incorrect email  or password"
        })
    }

    const isPasswordValid= await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return res.status(400).json({
            message:"Incorrect email  or password"})
    }

    const token= jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message:"user loged in successfully",
        user:{
            _id:user._id,
            Name:user.Name,
            email:user.email
        }

    })

    
}

async function foodPartnerLogout(req,res) {
    res.clearCookie("token");
    res.status(201).json({
        message:"Food Partner user LOgout Successfully"
    });
    
}



module.exports={registerUser,loginUser,logoutUser,foodPartnerLogout,foodPartnerLogin,foodPartnerRegister}
