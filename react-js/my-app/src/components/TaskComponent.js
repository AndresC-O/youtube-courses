import React, {Component} from "react";
import Taks from "./Task";

class TaksItem extends Component{
    render(){
        return this.props.task.map(task => <Taks task={task}></Taks>)
    }
}

export default TaksItem;