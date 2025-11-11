//start server
require('dotenv').config();

const app=require("./src/app");
const connectDb=require("./src/db/db");

connectDb();
const port=8080;

app.listen(port,()=>{
console.log("server listen on 8080 port");
});

