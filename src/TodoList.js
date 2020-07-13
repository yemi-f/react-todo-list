import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';
import AddTodoItem from './AddTodoItem';

const TodoList = () => {

    const [todos, setTodos] = useState(
        [
            {
                id: uuidv4(),
                title: "do this",
                isCompleted: false,
            },
            {
                id: uuidv4(),
                title: "do that",
                isCompleted: false,
            },
            {
                id: uuidv4(),
                title: "do work",
                isCompleted: false,
            },
        ]
    )

    const markCompleted = (id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.isCompleted = !todo.isCompleted
                }
                return todo
            })
        )

        console.log(id)

    }

    const addTodoItem = (title) => {
        const newTodoItem = {
            id: uuidv4(),
            title,
            isCompleted: false,
        }

        setTodos([...todos, newTodoItem])
    }

    const deleteTodoItem = id => {
        setTodos([...todos.filter(todo => todo.id !== id)])
    }


    return (
        <div className="container">
            <AddTodoItem addTodoItem={addTodoItem} />
            {todos.map(todo => (
                <TodoItem key={todo.id} id={todo.id} title={todo.title}
                    isCompleted={todo.isCompleted}
                    markCompleted={markCompleted}
                    deleteTodoItem={deleteTodoItem} />
            ))
            }
        </div>

    );
}

export default TodoList;