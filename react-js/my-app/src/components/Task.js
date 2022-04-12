import React, {Component} from "react";

class Taks extends Component{
    render(){
        return <div>
            {this.props.task.title} - {this.props.task.description} - {this.props.task.done}
            <input type='checkbox'></input><button>x</button>
        </div>
    }
}

export default Taks;