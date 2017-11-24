import React, { Component } from 'react';

import{
    Paper,
    TextField,
RaisedButton,


} from  'material-ui';
import * as firebase from 'firebase'


export default class Post extends Component{
    constructor(){
        super()
        this.state ={
            title:"",
            salary:"",
            des : "",
          
        }
    }


handletitle(value){
    this.jobtitle=value.target.value
    }
    handlesal(value){
     this.jobsal=value.target.value
    }
    handledes(value){
     this.jobdes=value.target.value
    }
    handleclick(){
        if(this.jobtitle !== "" && this.jobsal !== ""& this.jobdes !== ""){
            var user = firebase.auth().currentUser;
            firebase.database().ref("users/").child(user.uid).on("value", (snapshot)=>{
            this.posts = snapshot.val().post

                    })
             
                            
         
                 
             
                firebase.database().ref().child(`jobs/`).push({
                 title:this.jobtitle,
               salary:this.jobsal,
               description:this.jobdes,
                  uid:user.uid  
                }
                ).then(()=>{
                    alert("Your Job Has Been Posted")
                    
                }
               
             ).catch((error)=>{alert(error.message)})
           }
            

    }
render(){
    var jobtitle;
    var jobdes;
    var jobsal;
    var posts;
    return(
        <div>
            <div className = "paper" >
          <h1>Post A Job</h1>

<br />

            <Paper zDepth = {1} className = "paper1" >
         
            <form  className = "form"   >
                 <TextField  onChange = {this.handletitle.bind(this)}
                 
      floatingLabelText="Job Title"

    /><br />
     <TextField
     
     onChange = {this.handlesal.bind(this)}
      floatingLabelText="Job Salary"

    /><br />
    <TextField
   
      
      floatingLabelText="Job Description"
    onChange = {this.handledes.bind(this)}
     
    /><br />
    
<RaisedButton label="Post" primary={true} className = "btn" 
onClick = {this.handleclick.bind(this)}  
/>
      <br />
    <br />
      
</form>
</Paper>
        </div>


                
            </div>


    )
}




}