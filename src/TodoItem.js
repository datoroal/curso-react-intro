import './TodoItem.css';


function TodoItem({ text, completed, onCompleted, onDelete }) {
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${completed && "Icon-check--active"}`}
                onClick={onCompleted}>
                V
            </span>
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                {text}
            </p>
            <span
                className="Icon Icon-delete"
                onClick={onDelete}>
                X
            </span>
        </li>
    );
}


export { TodoItem };