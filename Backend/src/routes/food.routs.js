const express= require("express");
const foodController=require("../controller/food.controller");
const authMiddeware=require("../midleware/auth.midleware")
const multer= require("multer")
const upload= multer({
    storage: multer.memoryStorage()
})




const routes= express.Router()

routes.post("/",authMiddeware.authFoodPartnerMiddeware, upload.single("video"),foodController.createFood)




module.exports=routes

