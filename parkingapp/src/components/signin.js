import React, { Component } from 'react';
import {
    RaisedButton,
    Paper,
    TextField
} from 'material-ui';
import './css/signin.css';
import * as firebase from 'firebase';
import "../config/fbconfig";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

export default class Signin extends Component {
    constructor(){
        super()
        this.state={
            email:'',
            password:"",
            type:''
        }
    }
    handlemail(value){
     this.setState({
       email  :value.target.value
     })   
    }
    handlepass(value){
    this.setState({
       password :value.target.value
    })        
    }
    signin(){
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(
            ()=>{
               (firebase.database().ref().child(`users/${firebase.auth().currentUser.uid}`).on('value',(snapshot)=>{
               
                
                this.setState({
                    type:snapshot.val().type
                })
                if(this.state.type === 'user'){
                    this.props.history.push("/main")
                }
                else{
                    this.props.history.push("/admin")
                    
                    
               }}))
              
            }
        ).catch(
        
            (error)=>{
                this.props.history.push("/signin")
                alert(error.message)
        
                
            }        
        )
    }
    render() {
        return (
            <div>
                <Paper zDepth={2} style={{
                    width: "1366px",
                    height: "598px"
                }} >
                    <Paper zDepth={5} className="paper">
                        <form >
                          <br />
                          <br />
                          <br />
                            <TextField
                                hintText="Your Email"
                                floatingLabelText="Email"
                                onChange={this.handlemail.bind(this)}
                            /><br />
                            <br />
                            <br />
                            <TextField
                                hintText="Password"
                                floatingLabelText=" Password"
                                type = "password"
                                onChange={this.handlepass.bind(this)}
                                
                            /><br />
                            <br />
                            <br /> 
                            <RaisedButton primary = {true} labelStyle = {{
                                color:"white"
                            }}  label="Signin" onClick = {this.signin.bind(this)} /><br />
                            <Link to = "/signup" style={{
                                color:"white"
                            }} >
                           
                            <p>Create a New Account </p>
                            </Link>

                        </form>
                    </Paper>
                </Paper>




            </div>
        )
    }
}