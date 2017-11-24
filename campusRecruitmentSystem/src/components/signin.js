import React, { Component } from 'react';
import{

RaisedButton,
TextField,
Paper

} from  'material-ui'
import * as firebase from 'firebase'
import  '../config/fbconfig'
import './css/signup.css';
import Main from './main.js';


export default class Signin extends Component{

    // ComponentWillMount(){

    //     var user = firebase.auth().currentUser;
    //     console.log(user)
    //     if(user){
    //         this.setState({loggedin:true})

    //     }
    // }

constructor(){
    super()
    this.state = {
        email:"",
        password:"",
        loggedin:false
    }
}
handlemail(value){
    
      this.useremail=value.target.value
  
    // console.log(this.useremail)
}
handlepassword(value){
    this.userpassword=value.target.value
  
}
signin(){
  
firebase.auth().signInWithEmailAndPassword(this.useremail, this.userpassword).then(
    ()=>{
    this.props.history.push("/main")
    }
).catch(

    // this.props.history.push("/signin"),
    (error)=>{
        this.props.history.push("/signin")
        alert(error.message)

        
    }        
)






}
 render() {
     var useremail;
     var password
 if(!this.state.loggedin){
    return (
        
        <div className = "paper" >
            <h1>Sign In</h1>
            <br />
<Paper zDepth = {1} className = "paper1" >
            
            <form  className = "form" >
                 <TextField
        onChange = {this.handlemail.bind(this)}
      floatingLabelText="Email"

    /><br />
    <TextField
      onChange = {this.handlepassword.bind(this)}
      floatingLabelText="Password"
     
      type="password"
    /><br />
    <RaisedButton label="Sign In" primary={true} className = "btn" onClick = {this.signin.bind(this)}/>
    <br />
    <br />
   

</form>
</Paper>
        </div>

    )
    
}
else{
    return(
        <div>
            <Main />
            </div>
    )
}


 }



}