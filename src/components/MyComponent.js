// can use : class component or function component
import React from 'react';
import UserInfo from './userInfo';

class MyComponent extends React.Component{
    
    //JSX 
    render(){
        return(
            <div>
                <UserInfo />    

            </div>
        );
    }
}

export default MyComponent;