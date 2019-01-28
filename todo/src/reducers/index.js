import { NEW_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
    todos: []
}

const reducer = (state = initialState, action ) => {
    console.log('reducer:', action);

    switch(action.type){
        case NEW_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.payload,
                    completed: false
                }
            ]
        case TOGGLE_TODO: 
            return state.map(todo => 
                todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
            )
        default: 
            return state;
    }
}

export default reducer;