//import express  package
const express=require("express");

//import functions from controller
module.import={
    getTodos,
    createNewItem,
    upadeItem,
    deleteItem
}=require("../controller/toDocontrollers");

const route=express();

route.get("/todos",getTodos);

route.post("/createTodo",createNewItem);

route.put("/updateItem",upadeItem);

route.delete("/deleteItem",deleteItem);

module.exports=route;