const express=require("express");
const app=express();
const env=require("dotenv");
env.config();
app.use(express.json());





const PORT=process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`our server run on port ${PORT}`);
})