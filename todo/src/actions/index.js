// action type for creating a new todo
export const NEW_TODO = 'NEW_TODO';

// action creator for new todo's 
export const newTodo = todo => {
    return {
        type: NEW_TODO,
        payload: todo
    };
};