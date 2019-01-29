import React from 'react';
import { connect } from 'react-redux';
import { newTodo, toggleTodo } from '../actions';

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            todo : ''
        }
    }

    handleInput = e => {
        this.setState({ todo: e.target.value})
    }

    render() {
        return (
            <div>
                <input value={this.state.todo} placeholder="...Todo" onChange={this.handleInput}/>
                <button onClick={() => this.props.newTodo(this.state.todo) }>Add Todo</button>
                <ul>
                    {this.props.todos.map(todo => {
                        return <li onClick={() => this.props.toggleTodo(todo.id)}>{todo.text}</li>
                    })}
                </ul>
            </div>
        );
    }
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