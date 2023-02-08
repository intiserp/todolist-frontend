import { Button, Text } from "@mantine/core";

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
    <>
      {todos.map((todo) => (
        <Text>
          {todo.task}
          <Button
            variant="subtle"
            size="xs"
            // px="xs"
            onClick={() => removeTodo(todo.id)}
          >
            X
          </Button>
        </Text>
      ))}
    </>
  );
};

export default TodoList;
