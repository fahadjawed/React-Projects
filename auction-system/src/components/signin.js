import React, { Component } from 'react';
import {TextField,FlatButton,RaisedButton,CircularProgress,Paper } from 'material-ui'
import {connect} from 'react-redux'
import Action from '../store/actions/actions'
import middleware from '../store/middleware/middleware'
import * as firebase from 'firebase';
import './post.css'

import {

    BrowserRouter as Router,
    Route,
    Link
    
  } from 'react-router-dom'
function mapStateToProps(state){
    return{
    user:state.signin
    }
}
function mapDispatchToProps(dispatch){
    return{
    signin :(state)=>{
        dispatch(middleware.signin(state))
    }
    }
}


  class Signin extends Component{
      constructor(){
          super()
          this.state={
              email:'',
              password:'',
              loader:false,
          }
      }
      componentWillReceiveProps(nextProps,nextState){
  if(nextProps.user.signin){
      console.log(this.props)
            this.props.history.push('/home')
            console.log(this.props.user.signin)}

      }
      submit(){
        
        this.props.signin(this.state);
      }
    
      render(){
          
          return(
<div margin-top= "80px" className = "background top">
    <Paper style={{width:"40%", margin:"0 auto", opacity:"0.9"}}>
    <h1>Sign In</h1>
            <TextField style = {{marginTop:"10px",}}
            underlineFocusStyle= {{borderColor: "#009688"}}
      floatingLabelText="Email" floatingLabelStyle={{color:"#009688"}} onChange = {(val)=>{this.setState({email:val.target.value})}}  /><br />
         <TextField
         underlineFocusStyle= {{borderColor: "#009688"}}
         type = "password"
         
      floatingLabelText="Password" floatingLabelStyle={{color:"#009688"}} onChange = {(val)=>{this.setState({password:val.target.value})}}  /><br />
             
            
              <RaisedButton label = "Sign in" onClick = {this.submit.bind(this)} backgroundColor= "#009688" labelColor= "#FAFAFA"
 >
              </RaisedButton >
              <br />
              <br />
              <br />
             Dont have an account? <Link to = "/signup" style ={{color:"#009688"}}  > <strong>Sign Up</strong> </Link>
             </Paper>
</div>
          )
      }
  }

  export default connect(mapStateToProps,mapDispatchToProps) (Signin)