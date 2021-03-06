import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layouts/Header';

class App extends Component{
  state = {

    todos:[
        {
          id:1, 
          title:"Start learning Vue", 
          completed:true
        },
        {
          id:2, 
          title:"Start React", 
          completed:false
        },
        {
          id:3, 
          title:"Master Angular", 
          completed:true
        }
      ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todo.id===id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
}

deleteTodo = (id) => {
  this.setState({
    todos: this.state.todos.filter((todo) => todo.id !==id)
  })
}

  render(){
    return (
      <div className="App">
        <Header />
        <Todos todos = {this.state.todos}  deleteTodo={this.deleteTodo} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;



