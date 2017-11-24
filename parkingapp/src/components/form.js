import React, { Component } from 'react'

import {
    RaisedButton,
    Paper,
    TextField,
    FlatButton,
    Dialog,
    DatePicker,
    Slider,
    Tabs, Tab,
    TimePicker
} from 'material-ui';
import './css/main.css';
import Area1 from './areas/area1'
import Area2 from './areas/area2'
import Area3 from './areas/area3'



export default class Areas extends Component{
    constructor(){
        super()
        this.state = {
            area1:true,
            area2:false,
            area3:false
        }
    }

    handlearea1(){
        this.setState({
            area1:true,
            area2:false,
            area3:false,
        })
    }
    handlearea2(){
        this.setState({
            area2:true,
            area1:false,
            area3:false
        })
    }
    handlearea3(){
        this.setState({
            area3:true,
            area1:false,
            area2:false
        })
    }

    render(){
        
        return(
            
            <div>
                <Paper >
                <div className = "btns" > <RaisedButton label = "Area 1" style={{marginLeft:"80px"}} onClick = {this.handlearea1.bind(this)}  /> </div>
                <div className = "btns" > <RaisedButton label = "Area 2" onClick = {this.handlearea2.bind(this)}  /> </div>
                <div className = "btns" > <RaisedButton label = "Area 3" onClick = {this.handlearea3.bind(this)}  /> </div>

                {this.state.area1 ? <Area1 name = {"Area" + " 1"} /> : null}
                {this.state.area2 ?<Area1 name = {"Area" + " 2"} />: null}    
                {this.state.area3 ? <Area1 name = {"Area" + " 3"} /> : null}    
                    
            </Paper>




            </div>
        )
    }






}