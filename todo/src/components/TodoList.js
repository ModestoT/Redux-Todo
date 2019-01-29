import React from 'react';
import { connect } from 'react-redux';
import { newTodo, toggleTodo, deleteTodo } from '../actions';

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

    addNewTodo = e => {
        e.preventDefault();
        this.props.newTodo(this.state.todo);
        this.setState({todo: ''});
    }

    toggleCompleted = (e, id) => {
        e.preventDefault();
        this.props.toggleTodo(id);
    }

    deleteTodo = (e, id) => {
        e.preventDefault();
        this.props.deleteTodo(id);

    }
    render() {
        return (
            <div>
                <input value={this.state.todo} placeholder="...Todo" onChange={this.handleInput}/>
                <button onClick={(e) => this.addNewTodo(e) }>Add Todo</button>
                <ul>
                    {this.props.todos.map(todo=> {
                        return <li onClick={(e) => this.toggleCompleted(e,todo.id)} key={todo.id}>
                                {todo.text}
                                <button className="delete-btn" onClick={(e) => this.deleteTodo(e, todo.id)}>Delete</button>
                            </li>
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
    { newTodo, toggleTodo, deleteTodo }
)(TodoList);