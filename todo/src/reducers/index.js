import { NEW_TODO } from '../actions';

const initialState = {
    todos: []
}

const reducer = (state = initialState, action ) => {
    console.log('reducer:', action);

    switch(action.type){
        case NEW_TODO:
            return console.log('yes');
        default: 
            return state;
    }
}

export default reducer;