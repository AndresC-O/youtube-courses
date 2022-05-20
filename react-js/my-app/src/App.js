import React, {Component} from 'react';
import './App.css';
import tasks from './samples/taks.json'
import TaksItem from './components/TaskComponent';
import TaskForm from './components/TaskForm';

class App extends Component{

  state = {
    task: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.task.length
    }
    this.setState({
      task: [...this.state.task, newTask]
    })
  }

  render(){
    return <div>
      <TaskForm AddTask={this.addTask}></TaskForm>
      <TaksItem task={this.state.task}></TaksItem>
    </div>
  }
}

export default App;