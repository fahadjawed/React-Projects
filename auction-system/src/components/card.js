import React, { Component } from 'react';
import {connect} from 'react-redux'
import Action from '../store/actions/actions'
import middleware from '../store/middleware/middleware';
import {TextField,RaisedButton,Paper,Card, CardActions, CardHeader, CardMedia,Dialog, CardTitle, CardText,DropDownMenu,MenuItem}from 'material-ui'
import * as firebase from 'firebase'
import './post.css'
import Post from './post'




export default class Cardd extends Component{
constructor(){
    super()
    this.state={
        expand:false,
        price:null,
        open:false
    }
}
handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };
 



  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };
  handleClose = () => {
    this.setState({open: false});
  };
  delete(ind){
    firebase.database().ref(`users/${this.props.keys[ind]}`).remove()
}

  bid(ind,oldbid){
    var ob = Number(oldbid);
    var newbid = Number( this.state.price)
    if(newbid>ob){
    firebase.database().ref(`users/${this.props.keys[ind]}`).update({
        price:newbid,
        uid:firebase.auth().currentUser.uid,
        highestbidder:firebase.auth().currentUser.displayName
        
    })
    alert("Done")
   
   }
   else{
       alert("Bid more")
   }
}


render(){
    return(
<div>
<Dialog
          title="Edit Your Post"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          repositionOnUpdate={false}
           autoScrollBodyContent={true} 
         
          contentStyle={{height:"100%",maxHeight:"none"}}
        >
          <Post obj = {this.props.data} ind = {this.props.ind} keys = {this.props.keys} close = {this.handleClose} postt ={true}/>
</Dialog>
<Card expanded={this.state.expanded}   
 onExpandChange={this.handleExpandChange} style={{width:'700px',marginLeft:"200px",opacity:"0.9"}}>
<CardHeader
style={{marginRight:"490px"}}
  title={this.props.data.Name}
  avatar={this.props.data.photo}
  actAsExpander={true}
  showExpandableButton = {true}
  iconStyle = {{marginLeft:"500px"}}
  
/>

<CardMedia
  expandable={true}
  style={{maxHeight:"200px",width:"100px",margin:"0 auto"}}
>
  <img src={this.props.data.photo} alt=""  />
</CardMedia>
<CardText expandable={true} style = {{maxWidth:"400px",margin:"0 auto"}}>
<h4> Auctioner Details</h4>
<p>Name:{this.props.data.username}</p>
<p>email:{this.props.data.email}</p>
<p>Conact No:{this.props.data.contact}</p>


<div className = "box">
    <h3>Product Details</h3>
    <p><strong>Product Name:</strong>{this.props.data.Name}</p>
    <h2>Product Discription:</h2>
{this.props.data.description }<br />
</div>

<br />
{this.props.buy? <p>Auction Has Been Ended This Product is Yours</p> 
    :<p>Ending Date:{this.props.time[this.props.ind]}</p>
}
<br />
Price:${this.props.data.price}<br />
{this.props.buy ? null: <p><strong>Highest Bidder:</strong> {this.props.data.highestbidder}</p> }

<CardActions>
    {this.props.get?
        <div>
        <TextField  floatingLabelText= "Enter Your Bid"  type = "Number"  underlineFocusStyle= {{borderColor: "#009688"}}
floatingLabelStyle={{color:"#009688"}} onChange = {(val)=>{this.setState({price:val.target.value})}}/>
<RaisedButton label ="Make a Bid" onClick = {this.bid.bind(this,this.props.ind,this.props.data.price)} backgroundColor= "#009688" labelColor= "#FAFAFA"/>  
</div> :
this.props.postt?
<div> 
<RaisedButton label ="Update" onClick = {()=>{this.setState({open:true})}} backgroundColor= "#009688" labelColor= "#FAFAFA"/>
<RaisedButton label ="Delete" onClick = {this.delete.bind(this,this.props.ind)} backgroundColor= "#009688" labelColor= "#FAFAFA" style ={{marginLeft:"10px"}}/>
</div>:null

}


    
    </CardActions>
</CardText>
</Card>
    </div>

    )
}

}