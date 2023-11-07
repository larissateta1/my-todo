import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Todos from './Todos';
import { useState, useEffect } from 'react'
import { TodoItem } from './Todo';


const TodoContainer=()=>{
    const [newTodo, setTodo] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [todos, setTodos] = useState<TodoItem[]>([]);

    useEffect(()=>{
        const storedTodos = localStorage.getItem('todos');
        if(storedTodos){
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const handleShowInput = () => {
        setShowInput(true)
    }
    const handleNewTodo = ()=>{

        const newTodoItem: TodoItem ={
            id: todos.length +1,
            title: newTodo,
            completed: false
        }

        const updatedTodos = [...todos, newTodoItem];
        setTodos(updatedTodos);
        setTodo('');
        setShowInput(false);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));

    }
    const handleRemoveTodo=(id:number)=>{
        const updatedTodos = todos.filter((todo)=> todo.id !== id);
        setTodos(updatedTodos);

        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    return(
        <div className="container">
            <h1>Todo</h1>
            <Todos todos={todos} handleRemoveTodo={handleRemoveTodo}/>

            <div className='button-container'>
                {showInput ? (
                <div>
                    <div className='input-field'>
                        <input 
                        type="text" 
                        name="todo" 
                        id="todo" 
                        value={newTodo}
                        onChange={(e)=> setTodo(e.target.value)}
                        placeholder='Enter your Todo here'/>
                    </div>
                    <div className='button' onClick={handleNewTodo}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>
                </div>
                ): (
                    <div className='button' onClick={handleShowInput}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>
                )}
            </div>
        </div>
    )
}


export default TodoContainer;