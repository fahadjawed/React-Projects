import React, { Component } from 'react';
import {connect} from 'react-redux'
import Action from '../store/actions/actions'
import middleware from '../store/middleware/middleware';
import {ListItem,Avatar,Card, CardActions, CardHeader, CardText,FlatButton,Tabs, Tab,Slider,List,Divider   }from 'material-ui'
import * as firebase from 'firebase';
import Post from './post'
import Get from './get'
import Buyings from './mybuyings';
import Mypost from './myposts';

import "./post.css"
import {
  BrowserRouter as Router,
  Route,
  Link
  
} from 'react-router-dom'


function mapStateToProps(state){
    return{
        user:state
    }
}



class Home extends Component{
constructor(){
    super()
    this.state={
        flag:false,
        slideIndex: 0,
        get:true,
        post:false,
        buy:false,
        mypost:false
      }
}
componentWillReceiveProps(nextProps,nextState){
  
  if(nextProps.user.signin.signin){
    console.log("hellooooooo")
this.setState({flag:true})
}
else{
  
    this.props.history.push('/')
}

    console.log(nextProps.user)
  }
  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };
 componentWillMount(){
 }

    render(){
      var arr = this.state.flag
        return(
               
            <div className="maindiv" >
                <List style={{width:"200px",height:"600px", borderRight:"2px solid black",borderBottom:"2px solid black",position:"fixed",marginTop:"50px"}}>
      <ListItem primaryText="Auctions"style={this.state.get?{backgroundColor:"#009688", color:"white" }:{color:"white"}} onClick = {()=>{this.setState({get:true,post:false,buy:false,mypost:false})}} />
      <Divider />
      <ListItem primaryText="Post an Auction" style={this.state.post?{backgroundColor:"#009688", color:"white"}:{color:"white"}}  onClick = {()=>{this.setState({post:true,get:false,buy:false,mypost:false})}}  />
      <Divider />
      <ListItem primaryText="My Buyings" style={this.state.buy?{backgroundColor:"#009688", color:"white"}:{color:"white"}} onClick= {()=>{this.setState({buy:true,get:false,post:false,mypost:false})}}  />
      <Divider />
      
      <ListItem primaryText="My Posts" style={this.state.mypost?{backgroundColor:"#009688", color:"white"}:{color:"white"}} onClick= {()=>{this.setState({buy:false,get:false,post:false,mypost:true})}}  />
      
      <Divider />
      
    </List>
<div className = "div">
          {this.state.get?<Get /> :null}
          {this.state.post?<Post /> :null}
          {this.state.buy?<Buyings /> :null}
          {this.state.mypost?<Mypost /> :null}
          
          

  </div>
            </div>
        )
    }
}


export default connect(mapStateToProps)(Home)