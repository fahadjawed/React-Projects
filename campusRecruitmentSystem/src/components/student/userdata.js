import React, { Component } from 'react';

import{
    Paper,
    TextField,
RaisedButton,


} from  'material-ui';
import * as firebase from 'firebase'


export default class Userdata extends Component{
    constructor(){
        super()
        this.state ={
            email:"",
            name:"",
            edu : "",
            skills : "",
            exp:""
        }
    }

componentWillMount(){
    var user = firebase.auth().currentUser;
   
        if(user){
                firebase.database().ref("users/").child(user.uid).on("value", (snapshot)=>{
               
                   this.setState({
               
                    name:snapshot.val().name,
                    email:snapshot.val().email,
                    acctype:snapshot.val().acctype,
                    pass :snapshot.val().password,
                    edu:snapshot.val().education,
                    skills:snapshot.val().skill,
                    exp:snapshot.val().experience

                   }) 
                   

        })
    }
}
handleedu(value){
    this.edu=value.target.value
    this.setState({
        edu:value.target.value
    })
    }
    handleskill(value){
     this.skill=value.target.value
     this.setState({
        skills:value.target.value
    })
    }
    handleexp(value){
     this.exp=value.target.value
     this.setState({
        exp:value.target.value
    })
    }
render(){
    var edu;
    var skill;
    var exp;

    return(
        <div>
            <div className = "paper" >
          <h1>Your Profile</h1>

<br />

            <Paper zDepth = {1} className = "paper1" >
         
            <form  className = "form"   >
                 <TextField  onChange = {this.handleexp.bind(this)}
               
      floatingLabelText="experience"
      value = {this.state.exp}

    /><br />
     <TextField
     
     onChange = {this.handleedu.bind(this)}
      floatingLabelText="Education"
      value = {this.state.edu}

    /><br />
    <TextField
   
      
      floatingLabelText="Skills"
    onChange = {this.handleskill.bind(this)}
    value = {this.state.skills}
    /><br />
    
<RaisedButton label="Update" primary={true} className = "btn"   
onClick = {()=>{
    firebase.database().ref().child(`users/${firebase.auth().currentUser.uid}`).set({
        email:this.state.email,
        name:this.state.name,
        password:this.state.pass,
        acctype:this.state.acctype,
      education:this.state.edu,
        skill:this.state.skills,
        experience:this.state.exp
     })
}}
/>
      <br />
    <br />     
</form>
</Paper>
        </div>
            </div>
    )
}
}