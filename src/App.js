import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
const List = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      displayList: List
    }
  }
  

  toggleTask = id => {
    this.setState({
      toDo: this.state.displayList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
            };
          } else {
          return task;
        }
      })
    });
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
        displayList={this.state.displayList} 
        toogleTask ={this.state.toogleTask}/>
      </div>
    );
  }
}

export default App;
