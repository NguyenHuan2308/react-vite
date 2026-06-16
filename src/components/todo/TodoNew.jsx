const TodoNew = (props) => {
    console.log(props);
    
    const {addNewTodo} = props;
    // addNewTodo("Hihi");

    const handleClick = () => {
        alert("Click me!");
    }

    const handleOnChange = (name) => {
        console.log(">>> handle on change",name);
        
    }
    return (
        <div className="todo-new">
            <input type="text" 
                onChange={(e) => handleOnChange(e.target.value)}
            />
            <button style={{cursor: "pointer"}}
            onClick={handleClick}
            >Add</button>
        </div>
    );
};

export default TodoNew;
