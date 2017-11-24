import React, { Component } from 'react'

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
import Area1 from './areas/area1'
import Area2 from './areas/area2'
import Area3 from './areas/area3'
import Areas from './form';
import Bookings from  './bookings'
import Feedback from  './feedback'
import Myfeedback from  './myfeedback'




const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
  };
export default class Main extends Component{
 
    render(){
       
        return(
            <Tabs>
            <Tab label="Areas" buttonStyle = {{color:"white"}} >
              <div>
            {/* <Area1 props = {this.props} /> */}
          <Areas />
          
              </div>
            </Tab>
            <Tab label="My Bookings " buttonStyle = {{color:"white"}} >
              <div>
              <Bookings admin = {false} />
              
              </div>
            </Tab>
            <Tab
              label="Feedback" buttonStyle = {{color:"white"}}
             
            >
              <div>
              <Feedback admin = {false} />
              
              </div>
            </Tab>
            <Tab
              label="My Feedback" buttonStyle = {{color:"white"}}
             
            >
              <div>
            <Myfeedback />              
              </div>
            </Tab>
            
          </Tabs>


          
        )
    }
}