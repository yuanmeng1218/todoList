const Todo = require("../models/todo");

let currentId = 0;

class TodoListRepository {
  constructor() {
    const todo1 = new Todo(++currentId, "todo1", "todo1 desc");
    const todo2 = new Todo(++currentId, "todo2", "todo2 desc");
    todo1.isFinished = true;
    this.todoList = [todo1, todo2];
  }

  listAllTodos() {
    //实现查看所有todos的方法
    return this.todoList;
  }

  findTodoBy(id) {
    //实现通过id查看具体todo的方法
    if(id == todo1.id)
    {
      return todo1.description;
    }
    if(id == todo2.id)
    {
      return todo2.description;
    }
  }

  createTodo(todoBody) {
    //实现创建新todo纪录的方法
    todoBody = new Todo(++currentId,"todoBody","todoBody desc");
    return todoBody;
  }

  updateTodo(id, update) {
    //实现通过id和一个更新对象来更新todo纪录的方法
    if(id == todo1.id)
    {
      todo1 = update;
    }
    if(id == todo2.id)
    {
      todo2 = update;
    }
  }

  deleteTodoBy(id) {
    //实现通过id来删除todo纪录的方法
    if(id == todo1.id)
    {
      todo1=null;
    }
    if(id == todo2.id)
    {
      todo2=null;
    }
  }
}

module.exports = new TodoListRepository();
