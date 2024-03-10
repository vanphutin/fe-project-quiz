// can use : class component or function component
import React from 'react';

class MyComponent extends React.Component{
    state = {
        name : 'Van Phu Tin',
        address : 'Tin FullStack',
        age : 21
    }
    handleClick(event){
        console.log('click me my button');
        console.log(' My name is ',this.state.name);
    }
    handOnMouseOver(event){
        console.log(event);
    }
    //JSX 
    render(){
        return(
            <div>
                My name is {this.state.name} and I'm from Quang Nam
                <button onClick={this.handleClick}>click me</button>
                <button onMouseOver={this.handOnMouseOver}>Hover me</button>
            </div>
        );
    }
}

export default MyComponent;