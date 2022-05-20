import React, { Component } from "react";

export default class TaskForm extends Component{

    state = {
        title: "",
        description: ""
    }

    onSubmit = (e) => {
        this.props.AddTask(this.state.title, this.state.description);
        e.preventDefault();
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return( 
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    name="title" 
                    placeholder="Add a task" 
                    onChange={this.onChange} 
                    value={this.state.title}
                />
                <br/>
                <br/>
                <textarea 
                    placeholder="Add a description" 
                    name="description"
                    onChange={this.onChange} 
                    value={this.state.description}>
                </textarea>
                <br/>
                <input type="submit" value="Add Task"/>
            </form>
        )
    }
}