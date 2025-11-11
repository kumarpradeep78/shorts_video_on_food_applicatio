//auth api or auth routs

const express = require("express");
const controller=require('../controller/auth.controller');
const { models } = require("mongoose");

const router=express.Router();

router.post("/user/register",controller.registerUser)

router.post("/user/login",controller.loginUser)

router.get("/user/logout",controller.logoutUser)

router.post("/user/foodprtregister",controller.foodPartnerRegister)

router.post("/user/foodprtlogin",controller.foodPartnerLogin)

router.get("/user/foodprtlogout",controller.foodPartnerLogout)


module.exports=router;