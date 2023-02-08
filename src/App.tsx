import { useState, useEffect } from "react";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";
import { Container, Stack, Text } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

interface Todo {
  task: string;
  id: number;
}

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>({
    key: "todos",
    defaultValue: [],
  });

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <Stack align={"center"} justify="center" h={"100vh"}>
        <Text size={"xl"} variant="gradient" weight={700}>
          Todo List
        </Text>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} />
      </Stack>
    </Container>
  );
}

export default App;
