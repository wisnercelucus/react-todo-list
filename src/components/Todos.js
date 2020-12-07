import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component{

    render(){
        //console.log(this.props.todos)
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} deleteTodo = {this.props.deleteTodo} todo={todo} markComplete={this.props.markComplete} />        
        ))
    }

}


Todos.propTypes = {
    todos:PropTypes.array.isRequired
}
export default Todos;