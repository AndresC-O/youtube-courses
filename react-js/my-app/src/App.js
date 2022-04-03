import React from 'react';
import './App.css';

// function Helloworld(props){
//   return(<div>Hello World, {props.mytext}</div>);
// }

class Helloworld extends React.Component{

  state = {
    show: true
  }

  isLiked = 0;

  render(){
    if(this.state.show){
      return(
        <div>Hello World, {this.props.mytext} <button onClick={()=>{alert("you has touched this button")}}>Toggle Show</button></div>
      )
    }
    else{
      return(
        <div>There's nothing to show you!</div>
      )
    }
  }
}

// const App = () => <div>This is my component: <Helloworld/> </div>;

function App() {
  return (
    <div>This is my component: <Helloworld mytext="This is Andres!"/> <Helloworld/> <Helloworld/> </div>
  );
}

export default App;