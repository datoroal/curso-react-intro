import './TodoItem.css';
import { CompletedIcon } from '../CompletedIcon';
import { DeleteIcon } from '../DeleteIcon';


function TodoItem({ text, completed, onCompleted, onDelete }) {
    return (
        <li className="TodoItem">
            <CompletedIcon
                completed={completed}
                onCompleted={onCompleted} />

            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                {text}
            </p>
            <DeleteIcon
                onDelete={onDelete} />
        </li>
    );
}


export { TodoItem };