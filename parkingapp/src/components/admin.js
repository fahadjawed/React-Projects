import React, { Component } from 'react';


import {
    RaisedButton,
    Paper,
    TextField,
    FlatButton,
    Dialog,
    DatePicker,
    Slider,
    Tabs, Tab
} from 'material-ui';
import './css/main.css';
import * as firebase from 'firebase';
import '../config/fbconfig';
import Bookings from  './bookings';
import Feedback from  './feedback'
import Allfeedback from  './allfeedbacks'
import Students from  './allstudents'










export default class Admin extends Component{
    constructor(){
        super()
        this.state = {
            value:null,
            starttime:null,
            endtime:null
        }
    }
handleclick(value){
    console.log(this.state.value)
    for(var i = 1;i<=this.state.value;i++){
    firebase.database().ref().child(`areas/`).push({
    bookedby:"",
    till:"",
    start:"",
    slot:i,
    

    })
}

}
handlechange(value){
var num = Number(value.target.value)
    this.setState({
        value:num
    })
    // console.log(this.state.value)
}
    render(){
        return(
            <div>
                 <Tabs>
            <Tab label="Bookings" buttonStyle = {{color:"white"}} >
          <Bookings admin = {true}/>
            </Tab>
            <Tab label="Feedbacks" buttonStyle = {{color:"white"}} >
              <div>
              <Allfeedback admin= {true}/>
            
              
              </div>
            </Tab>
          
            <Tab
              label="All Students" buttonStyle = {{color:"white"}}
             
            >
              <div>
            <Students />
              
              </div>
            </Tab>
            </Tabs>
            </div>
        )
    }
}