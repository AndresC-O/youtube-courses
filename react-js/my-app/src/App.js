import React, {Component} from 'react';
import {BrowserRouter as Route, Router} from 'react-router-dom';
import './App.css';
import tasks from './samples/taks.json'
import TaksItem from './components/TaskComponent';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';

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

  deleteTask = (id) => {
    const newTask = this.state.task.filter(task => task.id !== id)
    this.setState({
      task: newTask
    })
  }

  checkDone = (id) => {
    const newTask = this.state.task.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task
    })
    this.setState({
      task: newTask
    })
  }

  render(){
    return <div>
      <Router>
        <Route path="" render={() =>{
          return <div>
            <TaskForm addTask={this.addTask}/>
            <TaksItem task={this.state.task} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
          </div>
        }}/>
      </Router>
      
      <Posts></Posts>
    </div>
  }
}

export default App;