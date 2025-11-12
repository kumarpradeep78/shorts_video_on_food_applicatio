const foodModel= require("../models/food.model");
const { v4: uuid } = require('uuid');

const storageService=require("../services/storage.service")

 async function createFood(req,res){
    console.log(req.foodPartner)
    console.log(req.body)
    console.log(req.file)
    const result= await storageService.uploadFile(req.file.buffer.toString('base64'),uuid())
    console.log("-------Result---------")
   console.log(result)
    

     const foodItem=await foodModel.create({
      name:req.body.name,
      video:result.url,
      description:req.body.description,
      foodPartner: req.foodPartner._id

    })

    res.status(201).json({
      message: "Food video uploaded successfully",
      food: foodItem
    })
 }



 module.exports={createFood} 