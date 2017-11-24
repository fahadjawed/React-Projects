import React, { Component } from 'react';
import {
    RaisedButton,
    Paper,
    TextField
} from 'material-ui';
import './css/signin.css'
import * as firebase from 'firebase';
import "../config/fbconfig";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';




export default class Signup extends Component{
    constructor(){
        super()
        this.state = {
            name:"",
            email:'',
            password:""
        }
    }


handlemail(value){
this.setState({
email:value.target.value
})
}
handlename(value){
this.setState({
    name:value.target.value
    
})
}
handlepass(value){
this.setState({
    password:value.target.value
    
})
}
    signup(){
        if(this.state.email !== "" && this.state.password !== ""& this.state.name !== ""){
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(
           
               ()=>{
                firebase.database().ref().child(`users/${firebase.auth().currentUser.uid}`).set({
                 email:this.state.email,
               password:this.state.password,
               name:this.state.name,
               type:"user"
               
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
        render(){
        return(
            <div>
                 <Paper zDepth={2} style={{
                    width: "1366px",
                    height: "598px"
                }} >
                    <Paper zDepth={5} className="paper">
                        <form >
                            <TextField
                                hintText="Your Name"
                                floatingLabelText="Full Name"
                                onChange = {this.handlename.bind(this)}
                                
                                value = {this.state.name}
                            /><br />
                            <br />
                            <br />
                            <TextField
                                hintText="Your Email"
                                floatingLabelText="Email"
                                onChange = {this.handlemail.bind(this)}
                                value = {this.state.email}
                            /><br />
                            <br />
                            <br />
                            <TextField
                                hintText="Password"
                                floatingLabelText="Set A Password"
                                type = "password"
                                onChange = {this.handlepass.bind(this)}
                                
                                value = {this.state.password}
                            /><br />
                            <br />
                            <br /> 
                            <RaisedButton primary = {true} labelStyle = {{
                                color:"white"
                            }}  label="Signup" onClick = {this.signup.bind(this)}/><br />
                            <Link to = "/signin" style={{
                                color:"white"
                            }} >
                           
                            <p>Already Have An Account? </p>
                            </Link>

                        </form>
                    </Paper>
                </Paper>
            </div>
        )
    }
}








