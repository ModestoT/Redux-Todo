import { NEW_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

const initialState = {
    todos: []
}

const reducer = (state = initialState, action ) => {
    console.log('reducer:', action);

    switch(action.type){
        case NEW_TODO:
            const newTodo = {
                id: action.id,
                text: action.payload, 
                completed:false
            };
            return {...state, todos: [...state.todos, newTodo]}
        case TOGGLE_TODO: 
            return {...state, todos: state.todos.map(todo => 
                todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)}
        case DELETE_TODO: 
                return {...state, todos: state.todos.filter(todo => 
                    todo.id !== action.payload )}
        default: 
            return state;
    }
}

export default reducer;