import { FC, useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { Todo } from "../interfaces";
import { getTodoList, setTodoList } from "../utils";

const TodoApp: FC = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const updatedTodoList = [...todos, { id: Date.now(), text, completed: false }]
    setTodos(updatedTodoList);
    setTodoList(updatedTodoList)
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodoList = todos.map((todo) => {
      const { id: todoId, completed } = todo
      return todoId === id
        ? {
          ...todo,
          completed: !completed,
        }
        : todo
    })
    setTodos(updatedTodoList);
    setTodoList(updatedTodoList)
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => {
      const { id: todoId } = todo
      return todoId !== id
    }));
  };

  useEffect(() => {
    setTodos(getTodoList())
  }, []);

  return (
    <Box maxWidth="600px" margin="0 auto" padding="16px">
      <Typography variant="h4" align="center" gutterBottom>
        To Do App
      </Typography>

      <Paper
        component={TodoForm}
        onSubmit={handleAddTodo}
      />

      <Paper
        component={TodoList}
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </Box>
  );
};

export default TodoApp;