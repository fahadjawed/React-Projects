import React, { Component } from 'react';

import './App.css';
import{
  AppBar,

  FlatButton,
  RaisedButton ,
  Drawer,
  MenuItem
} from 'material-ui';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Signin from './components/signin';
import Signup from './components/signup';
import Main from './components/main';
import Admin from './components/admin';
import Value from './components/getvalue';
import * as firebase from 'firebase';
import  './config/fbconfig.js'
class App extends Component {
  constructor(){
    super()
    this.state={
      user:false,
      open: false
    }
  }
  handleClose = () =>{
    firebase.auth().signOut().then(this.setState({open: false,user:false}))};

  render() {
    return (
      <div className="App">
    <Router>
      <div>
        <AppBar
    title={<span   style= {{

      color:"white"
    }}  >Park It</span>}
      className = "appbar"
   onLeftIconButtonTouchTap = { () => {
      var user = firebase.auth().currentUser;
  if(user){ 
    firebase.database().ref("users/").child(user.uid).on("value", (snapshot)=>{
       this.setState({
        type:snapshot.val().type,
        name:snapshot.val().name,
        email:snapshot.val().email,
        user:true
       })   } )
    }
    this.setState({open: !this.state.open})
     }
  }    
      showMenuIconButton={true}
  />
  {this.state.user ? 
    <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        <p>{this.state.name}</p>
        <p> {this.state.type} Panel </p>
        <Link to = "/">
          <RaisedButton label = "Sign Out" onClick={this.handleClose} />  </Link>
        </Drawer>   : null}
  <Route exact path="/" component={Signin}/>
      <Route path="/signup" component={Signup}/>
      <Route path='/signin' component={Signin}/>
      <Route path='/main' component={Main}/>
      <Route path='/admin' component={Admin}/>
      <Route path='/getvalue/:index/:slots' component={Value}/>
      
     </div>
    </Router>
      </div>
    );
  }
}
export default App;
