import express from 'express';
const app = express();

const PORT = 8080

app.use(express.json())


let todos = [
  {id: 1, title: "Learn Node.js", completed: false},
  {id: 2, title: "Learn Python", completed: false},
  {id: 3, title: "Learn Bash", completed: false},
  {id: 4, title: "Learn DevOps", completed: false},
  {id: 5, title: "Learn Geige spielen", completed: false},
]

app.get("/health", (req, res) => {
  res.send("Server is running");
})

// CRUD operations
// convention to use plural for the endpoint and singular for the resource
// id is a parameter
// get all todos
// this is a collection of resources
app.get("/todos", (req, res) => {
  res.json({todos})
})

app.get("/todos/:id", (req, res) => {
  const todoId = req.params.id
  const todo = todos.find(todo => todo.id === Number(todoId)) ?? {}
  res.json({...todo})
})

app.post("/todos", (req, res) => {
  const body = req.body
  const newId = todos.length + 1
  const newTodo = { id: newId, ...body }
  todos.push(newTodo)
  res.json({newTodo})
}) 

app.put("/todos/:id", (req, res) => {
  const todoId = req.params.id
  const body = req.body
  const todo = todos.find(todo => todo.id === Number(todoId))
  if (todo) {
    // only change the status or change the title and the status
    const updatedTodo = {...todo, ...body}

    todos = todos.map(todo => todo.id === Number(todoId) ? updatedTodo : todo)
    res.json({updatedTodo})
  } else {
    res.json({message: "Todo not found"})
  }
})

app.delete("/todos/:id", (req, res) => {
  const todoId = req.params.id
  todos = todos.filter(todo => todo.id !== Number(todoId))
  res.send({message: "Todo deleted"})
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

