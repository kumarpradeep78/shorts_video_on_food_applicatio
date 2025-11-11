const express= require("express");
const foodController=require("../controller/food.controller");
const authMiddeware=require("../midleware/auth.midleware")




const routes= express.Router()

routes.post("/",authMiddeware.authFoodPartnerMiddeware,foodController.createFood)




module.exports=routes