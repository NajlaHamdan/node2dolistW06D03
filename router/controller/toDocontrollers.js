//array of todo item to applying CRUD operation
const todos = ["coding", "eating", "sleep"];

// get items from todos array
const getTodos = (req, res) => {
  try {
    res.status(200).json(todos);
  } catch (err) {
    console.log(err);
  }
};

// create new item in todos array
const createNewItem = (req, res) => {
  const { item } = req.body;
  try {
    todos.push(item);
    res.status(201).json(todos);
  } catch (err) {
    console.log(err);
  }
};

//update specific item in todos array by id
const upadeItem = (req, res) => {
  const { id } = req.body;
  const { item } = req.body;
  try {
    todos.splice(id, 1, item);
    res.status(201).json(todos);
  } catch (err) {
    console.log(err);
  }
};

//delete specific item in todos array
const deleteItem = (req, res) => {
  const { id } = req.body;
  try {
    todos.splice(id, 1);
    res.status(200).json(todos);
  } catch (err) {
    console.log(err);
  }
};

//exports function to use them in router
module.exports = {
  getTodos,
  createNewItem,
  upadeItem,
  deleteItem,
};
