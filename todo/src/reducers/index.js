

const reducer = (state = null, action ) => {
    console.log('reducer:', action);

    switch(action.type){
        case NEW_TODO:
            return console.log('yes');
        default: 
            return state;
    }
}

export default reducer;