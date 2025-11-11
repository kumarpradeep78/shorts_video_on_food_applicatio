const mongoose = require("mongoose");

const foodPartnerSchema= new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String
    }
})

const foodPartnerModel= mongoose.model("foodpartner",foodPartnerSchema);
module.exports=foodPartnerModel;