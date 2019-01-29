import { NEW_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
    todos: [
        {id:0, text: "Go for a walk", completed: false}
    ]
}
// const todos = [];
// return [ ...state, todo ]
const reducer = (state = initialState, action ) => {
    console.log('reducer:', state.todos);

    switch(action.type){
        case NEW_TODO:
            return {...state, todos: [...state.todos, {id: action.id, text: action.payload, completed:false}]}
        case TOGGLE_TODO: 
            return {...state, todos: state.todos.map(todo => 
                todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)}
            
        default: 
            return state;
    }
}

export default reducer;