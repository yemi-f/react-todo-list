import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const TodoItem = (props) => {


    const squareIconStyle = {
        color: "transparent",
        strokeWidth: "48",
        stroke: "#615F61",
        cursor: "pointer",
    }

    const trashIconStyle = {
        float: "right",
        cursor: "pointer",
        marginLeft: "16px",
    }

    const itemStyle = {
        padding: "12px",
        borderRadius: "8px",
        fontSize: "1.2em",

        backgroundColor: props.isCompleted ?
            '#232C37' : '#242324',
        color: props.isCompleted ?
            '#3A89D3' : '#f5f9f9',
    }

    const [icon, setIcon] = useState({
        isActive: false,
        source: <FontAwesomeIcon icon={faSquare} style={squareIconStyle} />,
    })

    const iconIsClicked = () => {
        if (icon.isActive === false) {
            setIcon({
                isActive: true,
                source: <FontAwesomeIcon icon={faCheckSquare} />
            })
        } else {
            setIcon({
                isActive: false,
                source: <FontAwesomeIcon icon={faSquare} style={squareIconStyle} />
            })
        }
    }


    return (
        <div>
            <p style={itemStyle} className="todo-item">
                <span style={{ marginRight: "16px" }} onClick={() => iconIsClicked()}>
                    <span onClick={props.markCompleted.bind(this, props.id)}>
                        {icon.source}
                    </span>
                </span>
                {props.title}
                <FontAwesomeIcon icon={faTrashAlt} onClick={props.deleteTodoItem.bind(this, props.id)}
                    style={trashIconStyle}
                />
            </p>
        </div>
    )
}

export default TodoItem;