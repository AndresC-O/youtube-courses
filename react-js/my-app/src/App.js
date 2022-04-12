import React, {Component} from 'react';
import './App.css';
import tasks from './samples/taks.json'
import TaksItem from './components/TaskComponent';

class App extends Component{

  state = {
    task: tasks
  }

  render(){
    return <TaksItem task={this.state.task}></TaksItem>
  }
}

export default App;