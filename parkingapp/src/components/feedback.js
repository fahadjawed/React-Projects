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
    TimePicker,
    Card,
     CardActions,
      CardHeader,
       CardText
} from 'material-ui';
import "./css/signin.css"
import * as firebase from 'firebase';
import '../config/fbconfig';


export default class Feedback extends Component{
    constructor(){
        super()
        this.state = {
           
            fb:'',
           
        }
    }



handlefb(value){
    this.setState({
        fb: value.target.value
    })
}
send(){
    if(this.state.email !== '' &&this.state.name !== '' &&this.state.fb !== '' ){
        firebase.database().ref('feedback/').push({
          email:firebase.auth().currentUser.email,
            feedback:this.state.fb
        })
    }

}


render(){
return(
this.props.admin ?  

<Paper zDepth = {3} style= {{
    height:"624",

}} >
<Paper  zDepth= {4}  style={{
          margin:"0 auto",
       
      }}>
      {this.state.userdata ?
      
          this.state.userdata.map((value,index)=>{
           
 

      <Card style= {{
          width:"300px",
      }} >
    
    <CardHeader
      title={value.name}
      subtitle={value.email}
      actAsExpander={true}
      showExpandableButton={true}
    />

    <CardText expandable={true}>
        {value.fb}
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>


      }) : <div>No Feed Back</div>}
      {console.log(this.state.userdata)}



    </Paper>
    
    
     </Paper>

      :
    <Paper zDepth = {3} style = {{
        height :"624px",
        position:"relative",
 
    }} >
      <Paper zDepth = {5} style={{
          margin:"0 auto",
          height:"300px",
          width:"400px"
      }} >

        <TextField
  hintText="Feedback"
  multiLine={true}
  rows={2}
  rowsMax={4}
  onChange = {this.handlefb.bind(this)}
  
/>
<br />
<RaisedButton label = "Send" primary = {true} onClick = {this.send.bind(this)}  />
</Paper>
        </Paper>
  

)





    // return(
    //     <Paper zDepth = {3} style = {{
    //         height :"624px",
    //         position:"relative",
     
    //     }} >
    //       <Paper zDepth = {5} style={{
    //           margin:"0 auto",
    //           height:"300px",
    //           width:"400px"
    //       }} >
    //       <TextField
    //   hintText="Name"
    //       onChange = {this.handlename.bind(this)}
    // /> <br />
    // <TextField
    //   hintText="Email"
    //   onChange = {this.handleemail.bind(this)}
      
    // />
    // <br />
    //         <TextField
    //   hintText="Feedback"
    //   multiLine={true}
    //   rows={2}
    //   rowsMax={4}
    //   onChange = {this.handlefb.bind(this)}
      
    // />
    // <br />
    // <RaisedButton label = "Send" primary = {true} onClick = {this.send.bind(this)}  />
    // </Paper>
    //         </Paper>
    // )
}

}