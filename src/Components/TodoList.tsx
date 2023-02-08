interface Todo {
  task: string;
  id: number;
}

interface TodoListProps {
  todos: Todo[];
  removeTodo: (id: number) => void;
}

const TodoList = (props: TodoListProps) => {
  const { todos, removeTodo } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.task}
          <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
