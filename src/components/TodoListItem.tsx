import { FC } from "react";
import { TodoItemProps } from "../interfaces";
import { Box, Button, Checkbox, Typography } from "@mui/material";

const TodoItem: FC<TodoItemProps> = ({ todo, onToggle, onDelete }): JSX.Element => {
  const { id, text, completed } = todo;

  return (
    <Box display="flex" alignItems="center" marginY="8px">
      <Checkbox checked={completed} onChange={() => onToggle(id)} />
      <Typography
        variant="body1"
        sx={{
          flexGrow: 1,
          mr: "16px",
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {text}
      </Typography>
      <Button
        variant="outlined"
        size="small"
        color="error"
        onClick={() => onDelete(id)}
      >
        Delete
      </Button>
    </Box>
  );
};

export default TodoItem;