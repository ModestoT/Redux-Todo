// Action types
export const NEW_TODO = 'NEW_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// Action Creator for new todo's 
export const newTodo = todo => {
    return {
        type: NEW_TODO,
        payload: todo
    };
};

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    };
};