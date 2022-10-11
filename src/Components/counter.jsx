import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState){
        console.log('prev-props', prevProps)
        console.log('prev-state', prevState)
    if(prevProps.counter.value !== this.props.counter.value){
        //make an ajax call 
    }
    }

    componentWillUnmount(){
        console.log('Unmount')
    }

    /*state = { 
        value: this.props.counter.value
     } 


    handleIncreament =() =>{
        this.setState({value: this.state.value + 1})
    };*/
  
    render() { 
        console.log('Counter - Rendered')
        return (
            <>
            <h5> Counter #{this.props.counter.id}</h5>
            <span style={{fontSize:'22px'}} className={this.getBadgeClasses()}>{this.formalCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-primary btn-sm m-2'>Increament</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm'>Delete</button>
            </>
        );
    }



getBadgeClasses(){
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'success';
        return classes;
    }

formalCount(){
    const {value} = this.props.counter; //destructuring
    return value === 0 ? 'Zero' : value;
}

}
 
export default Counter;