const todos = ["coding", "eating", "sleep"];

const getTodos = (req, res) => {
  res.status(200).json(todos);
};

const createNewItem = (req, res) => {
  const { item } = req.body;
  todos.push(item);
  res.status(201).json(todos);
};

const upadeItem = (req, res) => {
  const { item } = req.body;
  todos.push(item);
  res.status(201).json(todos);
};

const deleteItem = (req, res) => {
  //const {item}=req.body;
  const { id } = req.body;
  try {
    todos.splice(id, 1);
    res.status(200).json(todos);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getTodos,
  createNewItem,
  upadeItem,
  deleteItem,
};
