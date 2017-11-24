import React, { Component } from 'react';
import{


CircularProgress,


} from  'material-ui'
import * as firebase from 'firebase'
import  '../config/fbconfig'

import Company from './company'
import './css/main.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import User from './user'
import Student from './student';
import Admin from './admin'
export default class Main extends Component{

  
  ref = firebase.database().ref();
constructor(){
  super()
  this.state = {
            type:"",
            name:"",
            email:""

             };
}

componentWillMount(){
  if (this.ref.child(`users/${firebase.auth().currentUser.uid}`).on("value", (snapshot)=>{
    if(snapshot.val()){
    this.setState({
      type:snapshot.val().acctype,
      name:snapshot.val().name,
      email:snapshot.val().email
     })
    }
    else{
      alert("You Have Been Deleted By The Admin");
      var user = firebase.auth().currentUser;
      
      user.delete().then(()=> {
        this.props.history.push("/signin")
      }).catch(function(error) {
        // An error happened.
      });
    }


  }
  )){}
}  

 render() {

if(this.state.type === "student"){
 
    return (
   
     <div className = "paper1" >
       <Student type = {this.state.type} name = {this.state.name} email = {this.state.email}  /> 
  </div>

      
    );}

  else if(this.state.type === "company"){
    return(
      <div className = "paper1">  
         <Company type = {this.state.type} name = {this.state.name} email = {this.state.email} />
      </div> 
    )

  }
  else if(this.state.type === "admin"){
    return(
      <div className = "paper1">  
       <Admin />
    </div> 
    )
  }
else {
  return(
    <CircularProgress size={80} thickness={5} />
  )
}
}
}
