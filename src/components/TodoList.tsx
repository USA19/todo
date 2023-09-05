import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import TodoItem from './TodoListItem';
import { TodoListProps } from '../interfaces';
import { getTodoList } from '../utils';

const TodoList: FC<TodoListProps> = ({ todos, onToggle, onDelete }): JSX.Element => (
  <Box>
    {todos.map((todo) => {
      const { id } = todo
      return (
        <TodoItem
          key={id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      )
    })}

    {!todos.length && !getTodoList().length && (
      <Box border="1px solid #1664C0" p={2} borderRadius="4px">
        <Typography variant='body2' align='center' color="#1664C0">
          NO DATA FOUND
        </Typography>
      </Box>
    )}
  </Box>
);

export default TodoList