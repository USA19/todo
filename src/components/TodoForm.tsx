import { FC, useState, FormEvent, ChangeEvent } from "react"
import { Box, Button, TextField } from "@mui/material";
import { TodoFormProps } from "../interfaces";

const TodoForm: FC<TodoFormProps> = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text.trim()) return;
    onSubmit(text);
    setText("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target: { value = "" } } = event
    setText(value)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      alignItems="center"
      marginBottom="16px"
      sx={{ "& .MuiTextField-root": { flexGrow: 1, marginRight: "16px" } }}
    >
      <TextField
        value={text}
        onChange={handleChange}
        label="New Todo"
        variant="outlined"
      />

      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
};

export default TodoForm