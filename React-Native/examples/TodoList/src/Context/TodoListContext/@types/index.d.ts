interface ITodoListContext {
  todoList: Array<String>;
  addTodoList: (todo: String) => void;
  removeTodoList: (index: number) => void;
}
