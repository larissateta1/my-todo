import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheck } from '@fortawesome/free-solid-svg-icons';

export interface TodoItem{
    id:number;
    title: string;
    completed: boolean;
}

interface TodoProps {
    todo: TodoItem,
    onRemoveTodo: (id:number) => void;
}
const Todo =({todo, onRemoveTodo}: TodoProps)=>{

    const handleRemove= () =>{
        onRemoveTodo(todo.id);
    }
    return(
        <div className={`todo ${todo.completed ? 'completed' : ''}`}>
            <h3 className="title">{todo.title}</h3>
            <div className='icon-container' onClick={handleRemove}>
                <FontAwesomeIcon icon={faCheck} className='icon'/>
            </div>

        </div>
    )
}

export default Todo;