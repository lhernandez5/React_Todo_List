import React from 'react';
import TextField from '@mui/material/TextField';
import useInputState from './useInputState';

const TodoForm = ({ saveTodo }) => {
    const{value, reset, onChange}= useInputState();

    return (
        <form
            onSubmit={event => {
                event.preventDefault();

                saveTodo(value);
                reset();
            }}
            >
                <TextField 
                variant="outlined" 
                placeholder="Add to-do here" 
                margin="normal" 
                onChange={onChange}
                value={value}
                />
        </form>
    );
};

export default TodoForm;

