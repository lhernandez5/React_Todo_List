import React from 'react';
import List from '@mui/material/List';
import ListItem  from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = ({ todos, deleteTodo }) => (
    <List>
      {todos.map((todo, index) => (
        <ListItem key={index.toString()} dense listitembutton="true">
          <Checkbox tabIndex={-1} disableRipple />
          <ListItemText primary={todo} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteTodo(index);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
  
  export default TodoList;