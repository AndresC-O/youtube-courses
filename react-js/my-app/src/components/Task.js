import React, {Component} from "react";
import './Task.css'
import { PropTypes } from "prop-types";

class Taks extends Component{

    styleCompleted(){
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render(){

        const {task} = this.props;

        return <div style={this.styleCompleted()}>
            {task.title} - 
            {task.description} - 
            {task.id} -
            {task.done}
            <input type='checkbox' onChange={this.props.checkDone.bind(this, task.id)}></input>
            <button className="closebtn" onClick={this.props.deleteTask.bind(this, task.id)}>x</button>
        </div>
    }
}

Taks.propTypes = {
    task: PropTypes.object.isRequired,
}

export default Taks;