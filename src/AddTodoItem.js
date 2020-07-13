import React, { useState } from 'react';

const AddTodoItem = (props) => {

    const [newTitle, setNewTitle] = useState("")

    const addButtonStyle = {
        padding: "12px",
        borderRadius: "8px",
        borderWidth: "0",
        fontSize: "1.2em",
        cursor: "pointer",
    }

    const textBoxStyle = {
        backgroundColor: "#EFEFEF",
        fontSize: "1.2em",
        padding: "12px 8px",
        borderRadius: "8px",
        borderWidth: "0",
        color: "#696969",
    }

    const onSubmit = event => {
        event.preventDefault();
        props.addTodoItem(newTitle);
        setNewTitle("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="add new item"
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
                style={textBoxStyle}
            /> {" "}
            <input type="submit" value="Add" style={addButtonStyle} />
        </form>
    )
}

export default AddTodoItem;