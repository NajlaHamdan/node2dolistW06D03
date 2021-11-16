const express=require("express");
const app=express();
// const env=require("dotenv");
// env.config();
app.use(express.json());
// const cors = require("cors")
// app.use(cors());
const todos=["coding","eating","sleep"];

app.get("/todos",(req,res)=>{
    console.log("done");
    res.status(200).json(todos);
})

app.post("/createTodo",(req,res)=>{
    const {item}=req.body;
    todos.push(item);
    res.status(201).json(todos);
})

app.put("/updateItem",(req,res)=>{
    const {item}=req.body;
    const {id}=req.body;
    try{
        todos.splice(id,1,item);
        res.status(200).json(todos)
    }catch(err){
        console.log(err);
    }
})

app.delete("/deleteItem",(req,res)=>{
    //const {item}=req.body;
    const {id}=req.body;
    try{
        todos.splice(id,1);
        res.status(200).json(todos)
    }catch(err){
        console.log(err);
    }
})

const PORT=process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`our server run on port ${PORT}`);
})