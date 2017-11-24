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
import '../css/main.css';
import Value from '../getvalue';

import * as firebase from 'firebase';
import '../../config/fbconfig';
import Area from '../form.js';

export default class Area1 extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
            arr: [],
            slots: [],
            data:null,
            date:null,
            starttime: null,
            endtime: null,
            val: [],
            flag:false,
            form: false,
            userData : null
        }
    }
    handlestarttime(event, time) {
      
        var a = time.toString()
        var b =a.slice(15 , 24)
        var c  = b.split(":")
        console.log(c)
          this.setState({
            starttime: c


        })
    }
asd(){
    // console.log(seltime)
}
    handledate(event, date) {
       
        var a  = date.toString()
        var  b =  a.slice(7,15)
        var d = (date.getMonth()).toString()
  var e = d + b
  var c = e.split(" ")
        

   this.setState({
            date: c
        })
    }
    handleendtime(event, time) {
        this.setState({
            endtime:time,


        })
       
        
    }

    handleOpen(index) {
        // this.props.history.push('/getvalue')
        // this.props.props.history.push(`/getvalue/${index}/${this.state.slots}`)
        this.setState({
            form: true,
            index: index

        })
        firebase.database().ref().child(`areas/${this.state.slots[index]}`).on("value",(snapshot) =>{
        let data = snapshot.val()
        
  
            if(data){
               
            if(data.bookedby ){
               if(data.area === this.props.name){
                if(data.start>this.state.starttime && this.state.endtime < data.start  ){
                    
                                firebase.database().ref().child(`areas/`).push({
                bookedby: firebase.auth().currentUser.email,
                date: this.state.date,
               area:this.props.name,
                start: this.state.starttime,
                till: this.state.endtime,
                slot:index+1

            })
          
          
            alert("Your Slot Has Been Booked");

                }
                else{
                    alert("this slot is not available for this time period")
                }
            }
            else{
                firebase.database().ref(`areas/`).push({
                    bookedby: firebase.auth().currentUser.email,
                    date: this.state.date,
                   area:this.props.name,
                    start: this.state.starttime,
                    slot:(index+1),
                    till: this.state.endtime,
    
                })
                
                alert("Your Slot Has Been Bookeddd");
            }
            }
        }
            else{
                firebase.database().ref(`areas/`).push({
                    bookedby: firebase.auth().currentUser.email,
                    date: this.state.date,
                   area:this.props.name,
                    start: this.state.starttime,
                    slot:(index+1),
                    till: this.state.endtime,
    
                })
                
                alert("Your Slot Has Been Bookeddd");

            }
        

        })





// console.log(this.state.arr[index])





    }

    handleClose = (index) => {
        console.log(index)
        this.setState({ open: false });
    };

    handleclick() {
        var bool = this.state.bool.slice(0);
        var data = this.state.data;
        var index = [];
      var ct = Number(new Date().getTime());
    var get = new Date(Number(this.state.date[2]) , Number(this.state.date[0])  , Number(this.state.date[1]), Number(this.state.starttime[0],Number(this.state.starttime[1])  )   ).getTime()
    
    var seltime = this.state.starttime
    
        if (this.state.starttime !== null && this.state.endtime !== null) {
            if(get > ct){
                // console.log(data)
                for(let i in data){
                    if((data[i].start > this.state.starttime && this.state.endtime <  data[i].start)     ){
                      
                    
                if(data[i].area === this.props.name){
                // console.log("helllooooooo")
                  
                    this.setState({bool:bool,form:true});
                }
            }
                else {  
                    console.log("hhu")
                  
                    index.push(data[i].slot)
                    
                                        for(var j = 0;j < index.length; j++){
                                            
                                                           
                                                        bool.splice(index[j]-1, 1, false);
                                                        console.log("saddadsssssssssssssssss")
                                                        
                                                        // else{
                                                        //     bool.splice(index[j]-1,1,true)
                                                        // }
                                                    }
                                                    this.setState({bool:bool,form:true});
                                                
                }
                
                
              
              
              
                
               
            



            }
         

           
            
            // console.log(bool)
            
            this.setState({bool:bool,form:true});
            

        }
        else{
            alert("Please Give a Valid Time and Date " )
        }

        }
        else {
            alert("Please Fill In All Required Firelds")
        }

       

    }
    hideslot(){
var bool = []
        for(var i  = 0;i<20;i++){
            bool.push(true)

        }
        

        this.setState({
            form:false,
            bool:bool
        })
    }
    componentWillMount() {
        var bool = [] ;
        
        var date = new Date()
        var time = date.getHours()
        for(var i  = 0;i<20;i++){
            bool.push(true)

        }
        this.setState({
            bool:bool
        })
        //   console.log(time)
        firebase.database().ref("areas/").on('value', (snapshot) => {
            var data = snapshot.val();
           
           
            
            
          
            if (data) {
                console.log(data)
                var keys = []
                var started = []
                var array = []
                // console.log(data)
                var userData = Object.values(data)
// console.log(userData)
                for (let i in data) {
                
                   

                    keys.push(i)
                    // console.log(i)
                   

                }
               
                

                this.setState({
                    arr: Object.values(data),
                    slots: keys,
                    data: data,
                    started: started,
                    userData : userData

                })
                console.log(this.state.data)



            }
         
        })
       
      

    }
   
    render() {

        const style = {
            minWidth: "10px",
            maxWidth: "51px",
            minHeight: "50px"

        }
        var counter = 0

        return (
            <div >

                <div>
                    <Paper zDepth={2} style={{
                        minWidth: "1349px",
                        minHeight: "800px",

                        position: "absolute"
                    }} >
                        <div className="parent">
                        <Paper zDepth={5} style={{
                                margin: "0 auto",
                                width: "400px",
                                height: "420px"
                            }} >

                                <div className="form" >
                                    <h1>Book Slot for {this.props.name} </h1>

                                    <TimePicker
                                        hintText="Start Time"
                                        autoOk={true}
                                        onChange={this.handlestarttime.bind(this)}
                                        onFocus = {this.hideslot.bind(this)}


                                    /><br />
                                    <br />
                                    <TimePicker
                                        hintText="End Time"
                                        autoOk={true}
                                        onChange={this.handleendtime.bind(this)}
                                    />

                                    <br />
                                    <br />
                                    <DatePicker hintText="Set Date"
                                        autoOk={true}
                                        onChange={this.handledate.bind(this)}
                                        disableYearSelection={true}

                                    />
                                    <br />
                                    <br />
                                    <RaisedButton label="Selec A Slot" onClick={this.handleclick.bind(this)} primary={true} style={{ marginLeft: "60px" }} labelStyle={{
                                        color: "white",

                                    }} />
                                </div>

                            </Paper>



                        </div>
                        {this.state.form  ?
                            this.state.bool.map((value, index) => {
                                return(
                                value ?
                                <div key={index} className="slots" >
                                <div className="spot"  > <FlatButton onClick={this.handleOpen.bind(this, index)} label={"slot" + (index+1 )} style={{ minWidth: "10px", maxWidth: "59px", minHeight: "50px" }} labelStyle={{ marginLeft: "-13px" }} hoverColor="blue" /> </div>
                                    
                                    
                           

                                        </div>
                                
                                  : 

                                        <div key={index} className="slots" >
                                        <div className="spot"  > <FlatButton label={"slot" + (index+1)} style={{ minWidth: "10px", maxWidth: "59px", minHeight: "50px", backgroundColor: "red" }} labelStyle={{ marginLeft: "-7px" }} disabled={true} /> </div>
                                    

                                        </div> 
                            
                                )
                                         }
                            
                            )

                            : null}
                    </Paper>
                </div>
            </div>
        )
    }
}