const express = require("express");
const app = express();
app.use(express.json());

//array of todo item to applying CRUD operation
const todos = ["coding", "eating", "sleep"];

// get items from todos array
app.get("/todos", (req, res) => {
  console.log("done");
  res.status(200).json(todos);
});

// create new item in todos array
app.post("/createTodo", (req, res) => {
  const { item } = req.body;
  todos.push(item);
  res.status(201).json(todos);
});

//update specific item in todos array by id
app.put("/updateItem", (req, res) => {
  const { item } = req.body;
  const { id } = req.body;
  try {
    todos.splice(id, 1, item);
    res.status(200).json(todos);
  } catch (err) {
    console.log(err);
  }
});

//delete specific item in todos array
app.delete("/deleteItem", (req, res) => {
  //const {item}=req.body;
  const { id } = req.body;
  try {
    todos.splice(id, 1);
    res.status(200).json(todos);
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`our server run on port ${PORT}`);
});
