import React, { Component } from 'react';

import{

RaisedButton,
TextField,
Paper ,
SelectField,
RadioButtonGroup, 
RadioButton,
Avatar,
ListItem,
List,
Tab,
Tabs

} from  'material-ui';
import SwipeableViews from 'react-swipeable-views';

import * as firebase from 'firebase'
import  '../config/fbconfig';
import Post from './company/post.js';
import Posted from './company/postedjobs.js';
import Allstudents from './company/allstudents.js';




const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
  
    tab:{
      width:300
    }
  };
  export default class Company extends Component {
    state = {
 
      slideIndex: 0,
    };
    select = (index) => {this.setState({selectedIndex: index})
  
    
  
  };
  
  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };
  
    render() {
  return(
    <div className = "contain">
    <Tabs
      onChange={this.handleChange}
      value={this.state.slideIndex}
      tabItemContainerStyle={{width: '1365px'}}
    style={{background: 'black'}}
    contentContainerStyle={{background: '#FFF'}}
     
      
    >
      <Tab label="Post Job" value={0} 
    
      
       />
      <Tab label="My Posted Jobs" value={1} />
      <Tab label="All Students" value={2} />
    </Tabs>
    <SwipeableViews
      index={this.state.slideIndex}
      onChangeIndex={this.handleChange}
      containerStyle = {{
        width:"1350px"
      }}
    >
      <div className="job">
        <Post />
      </div>
      <div >
       <Posted/>
      </div>
      <div >
      <Allstudents />
      </div>
    </SwipeableViews>
  </div>
    
  )
    
  
  
  }
  }
  