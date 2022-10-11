import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navbar';
import Counters from './Components/counters';

class App extends Component {
  state = {  
    counters : [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 7},
        {id: 4, value: 0}
    ]
} 
constructor (){
  super();
  console.log('APP -Constructor')
}

componentDidMount(){
  console.log('App - Mounted')
}


handleIncrement = counter =>{
    const counters = [...this.state.counters] //clone the counters 
    const index = counters.indexOf(counter)
    counters[index] ={...counter} //spread operator
    counters[index].value ++;
    this.setState({counters})
};

handleDelete = counterId =>{
   const counters = this.state.counters.filter(c => c.id !== counterId); //use to get all the id apart from the given id
   this.setState({counters}) //key and value are same so we simplify with one only
};

handleReset = () =>{
    const counters = this.state.counters.map(c =>{
        c.value = 0;
        return c;
    })
    this.setState({counters});
};


  render() { 
    console.log('App - Rendered')
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          counters={this.state.counters} 
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;
