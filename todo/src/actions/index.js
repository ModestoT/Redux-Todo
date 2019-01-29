// Action types
export const NEW_TODO = 'NEW_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// Action Creator Todo's 
let todoId = 0;
export const newTodo = todo => {
    return {
        type: NEW_TODO,
        payload: todo,
        id: todoId++
    };
};

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    };
};

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}