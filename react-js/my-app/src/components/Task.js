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
            {task.done}
            <input type='checkbox'></input><button className="closebtn">x</button>
        </div>
    }
}

Taks.propTypes = {
    task: PropTypes.object.isRequired,
}

export default Taks;