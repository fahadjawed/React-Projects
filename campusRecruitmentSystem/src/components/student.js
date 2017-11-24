import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import './css/student.css';
import Signin from "./signin";
// import Jobs from  './admin.js';
import Signup from "./signup";
import Company from './company';
import Jobs from './student/jobs';
import Userdata from './student/userdata';
import Allcompanies from './student/allcompanies';


import{
  CircularProgress,
  Tabs, 
  Tab
 
  
  } from  'material-ui'
  import SwipeableViews from 'react-swipeable-views';



/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
  tab:{
    width:300
  }
};
export default class Student extends Component {
  state = {
    // selectedIndex: 0,
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
    tabItemContainerStyle={{minWidth : '1360px',maxWidth : '1365px'}}
 

   
    
  >
    <Tab label="Jobs" value={0} 
  
    
     />
    <Tab label="Companies" value={1} />
    <Tab label="Profile" value={2} />
  </Tabs>
  <SwipeableViews
    index={this.state.slideIndex}
    onChangeIndex={this.handleChange}
    containerStyle = {{
      maxWidth:"1370px"
    }}
  >
    <div >
      <Jobs name = {this.props.name} email = {this.props.email} />
    </div>
    <div >
      <Allcompanies />
    </div>
    <div >
     <Userdata/>
    </div>
  </SwipeableViews>
</div>
  
)
  


}
}
