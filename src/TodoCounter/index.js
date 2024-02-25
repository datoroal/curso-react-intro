// const styles = {
//     fontSize: '24px',
//     textAlign: 'center',
//     margin: 0,
//     padding: '48px',
// };

import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <h1 className="TodoCounter">
            Has completado <span>{completed}</span> de <span>{total}</span> TODOs</h1>
    );
}

export { TodoCounter };