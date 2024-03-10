// can use : class component or function component
import React from 'react';

class MyComponent extends React.Component{
    state = {
        name : 'Van Phu Tin',
        address : 'Tin FullStack',
        age : 21
    }
    //JSX 
    render(){
        return(
            <div>
                My name is {this.state.name} and I'm from Quang Nam
            </div>
        );
    }
}

export default MyComponent;