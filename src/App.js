import React from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props) {
return <p>Hello {props.planet}! Welcome {props.name}!</p>
}

class cat extends React.Component {
 
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
 
   increment = () => {
    const newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  duplicate = () => {
    const newCount = this.state.count * 2
    this.setState({
      count: newCount
    }) 
  }
 
  render() {
    return (
      <div onClick={this.increment} onDoubleClick={this.duplicate}>

        {this.state.count}

      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <Welcome planet="" name="Louis" />
      <Welcome planet="" name="Ammar" />
      <Welcome planet="" name="Nasser" />
    </div>
  );
}

export default App;
