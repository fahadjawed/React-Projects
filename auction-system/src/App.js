import React, { Component } from 'react';
import image from './images/bg.jpg';
import {Popover,Menu,MenuItem,RaisedButton ,ListItem,Avatar,Card, CardActions, CardHeader,CircularProgress , CardMedia, CardTitle, CardText  }from 'material-ui'
import './App.css';
import {connect} from 'react-redux'
import Action from './store/actions/actions'
import middleware from './store/middleware/middleware'
import {
  BrowserRouter as Router,
  Route,
  Link
  
} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Signin from './components/signin';
import Signup from './components/signup'
import Home from './components/home'
import Mypost from './components/myposts'

function mapStateToProps(state){
  return{
  user:state.signin
  }
}
function mapDispatchToProps(dispatch){
  return{
  signout :()=>{
      dispatch(middleware.signout())
  }
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      val:false,
      open: false, loader:true
    }
  }
  
  handleTouchTap = (event) => {
   // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  
    console.log("hello")
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  componentWillReceiveProps(nextProps,nextState){
    if(this.props.user.signin){
    }
  }
 
  render() {

    return (
      <div className="App" >
          <AppBar
          style={{backgroundColor:"#009688",position:"fixed"}}
    title="Auction System"
    showMenuIconButton={false}
     iconElementRight = {this.props.user.signin? 
        <Avatar src={this.props.user.user.photoURL} onClick = {this.handleTouchTap.bind(this)} />
      
       :null} 
  />
  
  {this.props.user.signin?

  <Popover style ={{opacity:"0.9"}}
          open={this.state.open}
          anchorEl={this.state.anchorEl}

          onRequestClose={this.handleRequestClose.bind(this)}
        >
      <Card  >
    <CardHeader
      title={this.props.user.user.displayName}
      subtitle={this.props.user.user.email}
      avatar={this.props.user.user.photoURL}
    />
    <CardActions>
   <RaisedButton label="Sign Out" backgroundColor= "#009688" labelColor= "#FAFAFA" onClick = {()=>{this.props.signout(),this.setState({open:false})}} />
    </CardActions>
  </Card>
  
        
        </Popover>
        :null}
        <Router>
          <div>
          <Route exact path= '/' component = {Signin} />
          <Route  path= '/signup' component = {Signup} />
          <Route  path= '/home' component = {Home} />
          <Route  path= '/myposts' component = {Mypost} />
          
          
          </div>
          </Router>

      </div>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
