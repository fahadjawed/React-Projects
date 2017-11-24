import React, { Component } from 'react';
import{

RaisedButton,
TextField,
Paper ,
SelectField,
RadioButtonGroup, 
RadioButton

} from  'material-ui'
import * as firebase from 'firebase'
import  '../config/fbconfig'
import './css/signup.css';
import Main from './main.js'

class Signup extends Component{
constructor(){
  super();
  this.state = {
              email: "",
              name:"",
              password:"",
            type:"student",
            signedup:true,
            getemail:""
             }
}
handleemail(value){
this.useremail=value.target.value
}
handlepassword(value){
 this.userpassword=value.target.value
}
handlename(value){
 this.name=value.target.value
}
handleclick(){




 if(this.useremail !== "" && this.userpassword !== ""& this.name !== ""){
 firebase.auth().createUserWithEmailAndPassword(this.useremail, this.userpassword).then(

    ()=>{
     firebase.database().ref().child(`users/${firebase.auth().currentUser.uid}`).set({
      email:this.useremail,
    password:this.userpassword,
    name:this.name,
    acctype:this.state.type,
    post:0
     }
     ).then(
     this.props.history.push("/main")
  ).catch((error)=>{alert(error.message)})
}
 ).catch(
  (error) =>{
    alert(error.message)
  }

 )


 }






}

handlechange(value){

  this.setState({
    type:value.target.value
  })
  // console.log(this.state.type)
}




 render() {
    var useremail;
    var userpassword;
    var name;
    var type;

    return (

        <div className = "paper" >
          <h1>Sign Up</h1>

<br />

            <Paper zDepth = {1} className = "paper1" >
         
            <form  className = "form"   >
                 <TextField ref="email" onChange = {this.handleemail.bind(this)}
      floatingLabelText="Email"

    /><br />
     <TextField
     ref="name"
     onChange = {this.handlename.bind(this)}
      floatingLabelText="First Name"

    /><br />
    <TextField
    ref="pas"
      
      floatingLabelText="Password"
    onChange = {this.handlepassword.bind(this)}
      type="password"
    /><br />
    <RadioButtonGroup name="shipSpeed" defaultSelected ={"student"}  onChange ={this.handlechange.bind(this)}
    >
     <RadioButton
        value="student"
        label="Student"
     
      />
 <RadioButton
        value="company"
        label="Company"
        
      />

   </RadioButtonGroup>
<RaisedButton label="Sign Up" primary={true} className = "btn"   onClick = {this.handleclick.bind(this)}
/>
      <br />
    <br />
      
</form>
</Paper>
        </div>
    

    )
    }

  
}
export default Signup;