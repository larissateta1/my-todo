import Todo from "./Todo"
import { TodoItem } from "./Todo"


const Todos = ({ todos, handleRemoveTodo }: { todos: TodoItem[], handleRemoveTodo: (id: number) => void }) => {
    return (
      <div className="todos">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onRemoveTodo={handleRemoveTodo} />
        ))}
      </div>
    );
  }
  

export default Todos