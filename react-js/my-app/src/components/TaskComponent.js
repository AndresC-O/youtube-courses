import React, {Component} from "react";
import PropTypes from "prop-types";
import Taks from "./Task";

class TaksItem extends Component{
    render(){
        return this.props.task.map(task => <Taks task={task} key={task.id}></Taks>)
    }
}

TaksItem.propTypes = {
    task: PropTypes.array.isRequired,
}

export default TaksItem;