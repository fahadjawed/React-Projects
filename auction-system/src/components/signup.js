import React, { Component } from 'react';
import {connect} from 'react-redux'
import Action from '../store/actions/actions'
import middleware from '../store/middleware/middleware'
 import {TextField,FlatButton,RaisedButton,Paper} from 'material-ui'
 import Upload from 'material-ui-upload/Upload';
 import {
    BrowserRouter as Router,
    Route,
    Link
    
  } from 'react-router-dom'
  import './post.css'
  
function mapStateToProps(state){
    return{
    user:state
    }
}
function mapDispatchToProps(dispatch){
    return{
    signup :(state)=>{
        dispatch(middleware.signup(state))
    }
    }
}
class Signup extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            name:'',
            photo:'',
            flag:false
        }
    }
    componentWillReceiveProps(nextProps,nextState){
        if(nextProps.user.signin.signup){
            this.props.history.push('/home')
        }
      }
      submit(){
          if(this.state.flag&&this.state.name !== ''){
        this.props.signup(this.state);}
        else{
            alert("Please Complete the Form")
        }
      }
      onFileLoad = (val) => this.setState({photo:val.target.files[0],flag:true});
      render(){
          
          return(
<div className ="background top"  > 
    <Paper style ={{width:"40%", margin:"0 auto",opacity:"0.9"} }>
    <br />
    <h1>Sign Up</h1>
            <TextField 
                       underlineFocusStyle= {{borderColor: "#009688"}}
      floatingLabelText="Email" floatingLabelStyle={{color:"#009688"}} onChange = {(val)=>{this.setState({email:val.target.value})}}  /><br />
         <TextField

         underlineFocusStyle= {{borderColor: "#009688"}}
      floatingLabelText="Name" floatingLabelStyle={{color:"#009688"}} onChange = {(val)=>{this.setState({name:val.target.value})}} /><br />
        <TextField

        underlineFocusStyle= {{borderColor: "#009688"}}
      floatingLabelText="Password" floatingLabelStyle={{color:"#009688"}} onChange = {(val)=>{this.setState({password:val.target.value})}}  /><br />
      <RaisedButton
backgroundColor= "#009688" labelColor= "white"
      containerElement='label'  // <-- Just add me!
      label = {this.state.flag ?"Uploaded":"Upload Your Picture"}
            disabled={this.state.flag}
      
      >
        <input type="file" style = {{display :'none'}} ref = "img" onChange= {this.onFileLoad.bind(this)} />
    </RaisedButton>
           <br />
           <br />
           
              <RaisedButton label  = "Sign Up"  onClick = {this.submit.bind(this)} 
labelColor= "white"
              
                backgroundColor="#009688" />
                <br />
                <br />
                
                Already have an account? <Link to = "/" style ={{color:"#009688"}} > <strong>Sign In</strong> </Link>
</Paper>
</div>
          )
      }
  }

  export default connect(mapStateToProps,mapDispatchToProps) (Signup)
  