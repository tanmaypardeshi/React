import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends React.Component {
  state = {
    todos : [
      {id: 1, content: 'Buy Some Milk'},
      {id: 2, content: 'Play Mario Cart'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
        return todo.id !== id;
    });
    this.setState({
      todos:todos
    });
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos:todos
    })
  }
  render() {
    return (
      <div className="toto-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
