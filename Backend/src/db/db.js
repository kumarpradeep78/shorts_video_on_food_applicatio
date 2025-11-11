//create DB

const mongoose=require("mongoose");


 async function main(){
    console.log(process.env.MONGODB_URI);
    await    mongoose.connect(process.env.MONGODB_URI) 
    .then(()=>{

        console.log("DATA base connected");
    })
    .catch((err)=>{
        console.log("Mongo Db connection error",err);
    })
}

module.exports=main;