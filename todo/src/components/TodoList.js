import React from 'react';
import { connect } from 'react-redux';

import { newTodo, toggleTodo } from '../actions';

const TodoList = props => {
    return (
        <div>
            <input placeholder="...Todo"/>
            <button onClick={props.newTodo}>Add Todo</button>
            <ul>
                {props.todos.map(todo => {
                   return <li onClick={() => props.toggleTodo(todo.id)}>{todo.text}</li>
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = state => { 
    console.log('mSTP', state);
    return {
        todos: state.todos
    };
};

export default connect(
    mapStateToProps,
    { newTodo, toggleTodo }
)(TodoList);