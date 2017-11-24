import React, { Component } from 'react';

import{
  Drawer,
AppBar,
MenuItem,
RaisedButton
} from  'material-ui';
import {
    BrowserRouter as Router,
    Route,
    Link,
    
  } from 'react-router-dom';

export default class Button extends Component{
   
    handleClick(path){
      
        this.props.history.push(path)
    }
    render(){
        return(
            <div>
                <RaisedButton onClick = {this.handleClick("/signup")}  >Sign Up</RaisedButton>
                <RaisedButton onClick = {this.handleClick("/signin")} >Sign in</RaisedButton>
                <RaisedButton onClick = {this.handleClick("/signin")} >Sign out</RaisedButton>

                </div>
        )
    }
}