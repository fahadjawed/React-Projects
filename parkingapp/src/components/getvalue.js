import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,

  } from 'react-router-dom';
import {
    RaisedButton,
    Paper,
    TextField,
    FlatButton,
    Dialog,
    DatePicker,
    TimePicker
} from 'material-ui';
import './css/main.css';
import * as firebase from 'firebase';
import '../config/fbconfig'


export default class Value extends Component{
    constructor(){
        super()


        this.state = {
            open: true,
            date : null
        }
       
    }
    handlestarttime(event,time){
        this.setState({
            starttime:time.getTime()
           

        })

      
     
    }

    handledate(event,date){
        this.setState({
            date:date
        })
        // console.log(date.getDate() + "/"+date.getMonth())

    }
    handleendtime(event,time){
        this.setState({
            endtime:time.getTime(),
          
        })
   
    
        
    }

    handleclick(){
               if(this.state.starttime !== null &&this.state.endtime !== null  ){
         
    
        
        firebase.database().ref().child(`area1/slots/${this.state.slots[this.state.index]}`).push({
            bookedby:firebase.auth().currentUser.email,
            date:this.state.date,
            start:this.state.starttime,
            till:this.state.endtime,
      
        })
        alert("Your Slot Has Been Booked");
      
  
   
        
    }
    else{
        alert("Please Fill In All Required Firelds")
    }
   
   
    this.setState({
        display:false
    })
   

    
  
    }

    componentDidMount(){
        // var a = this.props.match.params.slots
        // var b =  a.split(',')
        this.setState({
            slots:this.props.slots,
            index:this.props.index,
            display : this.props.display
        })
      
    }



    
render(){
 
    // var index = this.props.match.params.index
    return(
        <div>
           
           {this.state.display ?
            
           
            
 
           <Paper zDepth = {5} style={{
               margin : "0 auto",
               width:"400px",
               height:"420px"
           }} >

           <div className = "form" >
 <h1>Book Slot {this.props.index} </h1>
 
            <TimePicker
      hintText="Start Time"
      autoOk={true}
      onChange = {this.handlestarttime.bind(this)}
    
      
      
    /><br />
    <br />
    <TimePicker
      hintText="End Time"
      autoOk={true}
      onChange = {this.handleendtime.bind(this)}
    />
   
    <br />
    <br />
    <DatePicker hintText="Set Date"
    autoOk = {true}
    onChange = {this.handledate.bind(this)}
    disableYearSelection = {true}
    
      />
      <br />
      <br />
           <RaisedButton label = "Book" onClick = {this.handleclick.bind(this)} primary = {true} style ={{marginLeft:"60px"}} labelStyle = {{
               color: "white",
             
           }}   />
   </div>
     
        </Paper>
  :null }

        </div>
    )

}

}