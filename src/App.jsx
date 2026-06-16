import'./components/todo/todo.css';
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import reactLogo from './assets/react.svg'

const App = () => {
    const name = "props";
    const age = 25;
    const data = {
        address: 'hanoi',
        country: 'vietnam'
    }

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew/>
            <TodoData
            name={name}
            age={age}
            data={data}
            />
            <div className='todo-image'>
                <img src={reactLogo} alt=""  className='logo'/>
            </div>
        </div>
    );
};

export default App;
