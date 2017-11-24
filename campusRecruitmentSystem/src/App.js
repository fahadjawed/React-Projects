import React, { Component } from 'react';

import{
  Drawer,
AppBar,
MenuItem,
RaisedButton,
Avatar,
ListItem
} from  'material-ui';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Main from './components/main.js';
import Signup from './components/signup.js';
import Signin from './components/signin.js';
// import FlatButton from 'material-ui/FlatButton'
// import RaisedButton from 'material-ui/RaisedButton';
import "./config/fbconfig"    ;
import './App.css';
import * as firebase from 'firebase'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      type:'',
      name:'',
      email:'',
      loggedin : true
    };
  }



  handleClose = () =>{ 
    
    this.setState({open: false,})
};
  render() {
    return (
     <div className = "App">
       <AppBar
    title="Campus"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonTouchTap ={() => {
      var user = firebase.auth().currentUser;
  if(user){
    firebase.database().ref("users/").child(user.uid).on("value", (snapshot)=>{
      
       this.setState({
        type:snapshot.val().acctype,
        name:snapshot.val().name,
        email:snapshot.val().email,
        loggedin:false
       }) 


       {/* console.log(this.state.type) */}
    }
    )
  }    
      this.setState({open: !this.state.open})} }
    
  />

 
  
    <Router>
    {this.state.loggedin ?
      <div>
 <Drawer
          docked={false}
          width={200}
         
       containerClassName = "draw"
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
         
            <div>
          <MenuItem onClick={this.handleClose}><Link to='/signin'>
           <RaisedButton label="Sign In" fullWidth={true} primary={true} className = "btn" />
          
          
          </Link></MenuItem>
          <br />
          <br />
          <MenuItem onClick={this.handleClose}><Link to="/signup">
          <RaisedButton label="Sign Up" fullWidth={true} primary={true} className = "btn" />
          </Link></MenuItem>
          <br />
          <br />
          
      
      </div>

      
        </Drawer>


        <Route exact path="/" component={Signin}/>
      <Route path="/signup" component={Signup}/>
      <Route path='/signin' component={Signin}/>
      <Route path='/main' component={Main}/>
      
</div>
:   <div>
 <Drawer
          docked={false}
          width={200}
         
       containerClassName = "draw"
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
         
            <div>
            <ListItem
      disabled={true}
      leftAvatar={<Avatar>{this.state.email[0]}</Avatar>}
    />
            
            <p>{this.state.email}</p>
            <p>{this.state.name}</p>
            <p>{this.state.type}</p>
          <MenuItem onClick={this.handleClose}><Link to='/signin'>
          
           <RaisedButton label="Sign Out" fullWidth={true} primary={true} className = "btn" 
           onClick ={ () => {
            firebase.auth().signOut().then(()=> {
                  this.setState({loggedin:true})
               {/* console.log(this.state.loggedin); */}
             })

            }
          }
           
           
            />
          
          
          </Link></MenuItem>
          </div>
          </Drawer>
          <Route exact path="/" component={Signin}/>
      <Route path="/signup" component={Signup}/>
      <Route path='/signin' component={Signin}/>
      <Route path='/main' component={Main}/>
          </div>
           }
  </Router>
    

  </div>
    
    );
  }
}

export default App;
