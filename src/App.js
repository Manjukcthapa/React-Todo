import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import Search from "./components/TodoComponents/Search "

const List = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayList: List,
      
    };
  }

  toggleTask = id => {
    this.setState({
      displayList: this.state.displayList.map(task => {
        if (task.id === id) {
          return {
            task: task.task,
            id: task.id,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      displayList: [...this.state.displayList, newTask]
    });
    console.log(this.state.displayList);
  };

  clearCompleted = () => {
    this.setState({
      displayList: this.state.displayList.filter(task => !task.completed)
    });
    console.log(this.state.displayList);
  
  };
  searchList = (search) => {
    this.setState({
      displayList: this.state.displayList.filter(task => task.task.includes(search))
    });
    console.log(this.state.displayList);
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          displayList={this.state.displayList}
          toggleTask={this.toggleTask}
        />
        <TodoForm addTask={this.addTask}  />
        <button className='clear' onClick={this.clearCompleted}>Clear Completed</button>
        <Search
         searchList={this.searchList}/>
      </div>
    );
  }
}

export default App;
