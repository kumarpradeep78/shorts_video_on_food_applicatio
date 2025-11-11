//create server
const express=require("express");
const cookieParser=require("cookie-parser")
const authRouts=require("./routes/auth.routs")
const foodRouts=require("../src/routes/food.routs")

const app= express();
app.use(cookieParser())
app.use(express.json());
module.exports=app; 

app.get("/",(req,res)=>{
    res.send("Hello kuamr");

});

app.use("/api/auth",authRouts);
app.use("/api/food",foodRouts);