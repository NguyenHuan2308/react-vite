import { useState } from "react";

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("New Text");

    const { addNewTodo } = props;
    // addNewTodo("Hihi");

    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("");
    };

    const handleOnChange = (name) => {
        setValueInput(name);
    };
    return (
        <div className="todo-new">
            <input
                type="text"
                onChange={(e) => handleOnChange(e.target.value)}
                value={valueInput}
            />
            <button style={{ cursor: "pointer" }} onClick={handleClick}>
                Add
            </button>
            <div>My text input is = {valueInput}</div>
        </div>
    );
};

export default TodoNew;
