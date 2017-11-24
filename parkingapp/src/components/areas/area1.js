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
            data: null,
            date: null,
            starttime: null,
            endtime: null,
            form: false,
            stime: null,
            etime: null,
            bool: [],
        }
    }
    handlestarttime(event, time) {
        var a = time.toString()
        var b = a.slice(15, 24)
        var c = b.split(":")
        this.setState({
            starttime: c
        })
    }
    handledate(event, date) {
        var a = date.toString()
        var b = a.slice(7, 15)
        var d = (date.getMonth()).toString()
        var e = d + b
        var c = e.split(" ")
        this.setState({
            date: c
        })
    }
    handleendtime(event, time) {
        var a = time.toString()
        var b = a.slice(15, 24)
        var c = b.split(":")
        this.setState({
            endtime: c
        })
    }
    handleOpen(index) {
      
        var bools = this.state.bool.slice(0);
        bools.splice((index),1,false)
        this.setState({
            index: index,
            bool:bools
        })
        firebase.database().ref("areas/").push({
            bookedby: firebase.auth().currentUser.uid,
            date: Number(new Date().getTime()),
            area: this.props.name,
            start: this.state.stime,
            till: this.state.etime,
            slot: index + 1
        })
        alert("your slot Has been booked")
    }
    handleclick() {
        var slott = []
        var ct = Number(new Date().getTime());
        var get = new Date(Number(this.state.date[2]), Number(this.state.date[0]), Number(this.state.date[1]), Number(this.state.starttime[0]), Number(this.state.starttime[1])).getTime()
        var end = new Date(Number(this.state.date[2]), Number(this.state.date[0]), Number(this.state.date[1]), Number(this.state.endtime[0]), Number(this.state.endtime[1])).getTime()
        var seltime = this.state.starttime
        firebase.database().ref("areas/").on('value', (snapshot) => {
            var bools = [];
        var index = [];
    
        
            for (var i = 0; i < 20; i++) {
                bools.push(true)
            }
        
                var datas = snapshot.val();
                if (datas) {
                    this.setState({
                        arr: Object.values(datas),
                    })
                    
                }
        
        if (this.state.starttime !== null && this.state.endtime !== null) { // 1st If
            if (get > ct) { // 2nd If

        var data = this.state.arr;
        
                for(let i in datas){
                    console.log(i)
                    if(datas[i].area === this.props.name){
                
                    if(((datas[i].till <get  ) || (datas[i].start > get && datas[i].start>end) ) ){
              
                        console.log("if")
                    }
                    else{
                        index.push(datas[i].slot)
                        console.log("else")
                    }
                }
            }
           
            
            
            for(let i = 0;i<index.length;i++){
                bools.splice((index[i]-1),1,false)
            }
        
            setTimeout(()=>{
                this.setState({
                    bool:bools,
                    form:true,
                    stime:get,
                    etime:end
                })
              },1000)
         
            }
            else { // Else of 2nd If
                alert("Please Give a Valid Time and Date ")
            }
        }
        else { // Else of first If
            alert("Please Fill In All Required Firelds")
        }
   
      
    })
    
    }
    hideslot() {
      
        this.setState({
            form: false,
        })
    }
 
    render() {
        const style = {
            minWidth: "10px",
            maxWidth: "51px",
            minHeight: "50px"
        }
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
                                        onFocus = {this.hideslot.bind(this)}
                                        onChange={this.handleendtime.bind(this)}
                                    />
                                    <br />
                                    <br />
                                    <DatePicker hintText="Set Date"
                                        autoOk={true}
                                        onChange={this.handledate.bind(this)}
                                        onFocus = {this.hideslot.bind(this)}
                                        disableYearSelection={true}
                                    />
                                    <br />
                                    <br />
                                    <RaisedButton label="Select A Slot" onClick={this.handleclick.bind(this)} primary={true} style={{ marginLeft: "60px" }} labelStyle={{
                                        color: "white",
                                    }} />
                                </div>
                            </Paper>
                        </div>
                        {this.state.form ?
                            this.state.bool.map((value, index) => {
                                return (
                                    value ?
                                        <div key={index} className="slots" >
                                            <div className="spot"  > <FlatButton onClick={this.handleOpen.bind(this, index)} label={"slot" + (index + 1)} style={{ minWidth: "10px", maxWidth: "59px", minHeight: "50px" }} labelStyle={{ marginLeft: "-13px" }} hoverColor="blue" /> </div>
                                        </div>
                                        :
                                        <div key={index} className="slots" >
                                            <div className="spot"  > <FlatButton label={"slot" + (index + 1)} style={{ minWidth: "10px", maxWidth: "59px", minHeight: "50px", backgroundColor: "red" }} labelStyle={{ marginLeft: "-7px" }} disabled={true} /> </div>
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