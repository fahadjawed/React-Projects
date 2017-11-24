import React, { Component } from 'react';

import{

RaisedButton,
TextField,
Paper ,
SelectField,
RadioButtonGroup, 
RadioButton,
Avatar,
ListItem,
List,
Divider

} from  'material-ui'
import Student from './student'
import * as firebase from 'firebase'
import  '../config/fbconfig'
import Signin from './signin'
import './css/main.css'
export default class User extends Component{
   constructor(){
       super()

       this.state= {
        email:"",
        

       }
   }
//    this.ref.child(`users/${user.acctype}` 
componentWillMount(){
     var user = firebase.auth().currentUser;
   
    
if (user) {
    
} else {
    return(
  <Signin />)
}
}
    render(){
          


return (
 <div >
     <div>
    <Student />
    </div>
   
</div>
)
    }
}