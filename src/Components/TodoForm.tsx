import { Button, Input } from "@mantine/core";
import { useState } from "react";

interface Todo {
  task: string;
  id: number;
}

interface Props {
  addTodo: (todo: Todo) => void;
}

const TodoForm: React.FC<Props> = (props) => {
  const [task, setTask] = useState("");
  const { addTodo } = props;

  const handleSubmit = () => {
    if (!task) {
      return;
    }
    addTodo({
      task,
      id: Date.now(),
    });
    setTask("");
  };

  return (
    <>
      <Input
        type="text"
        className="input"
        value={task}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTask(e.target.value)
        }
      />
      <Button type="submit" onClick={handleSubmit}>
        Add Task
      </Button>
    </>
  );
};

export default TodoForm;
