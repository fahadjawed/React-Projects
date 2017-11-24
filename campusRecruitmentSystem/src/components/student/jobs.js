import React, { Component } from 'react';
import{

RaisedButton,
TextField,
Paper ,
SelectField,
RadioButtonGroup, 
RadioButton,
Divider 

} from  'material-ui';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import * as firebase from 'firebase'
import  '../../config/fbconfig'
import './jobs.css'
const styles = {
    card: {
        width:"300px",
        height:"350px",
        borderTopLeftRadius:"4px",
        borderBottomRightRadius:"5px",
        borderTopRightRadius:"51px",
        margin:"30px"


    }}
export default class Jobs extends Component{
    ref = firebase.database().ref();
    

    constructor(){
        super()
      
        this.state={
            expanded: false,
            dataarr:[],
            arr:[]
        }
    }
    componentDidMount(){
        this.ref.child(`jobs/`).on("value", (snapshot) => {
             
             let data = snapshot.val();
         
             if(data){
          var arr = []
          let finalarr = []
             var userData = Object.values(data);

             for(let i in data){
                 finalarr.push(data[i])
                 arr.push(i)
            
         }
       
         this.setState({
             dataarr:finalarr,
             arr: arr,
         })   
             }     
             })
         }
 
  
render(){
 
 
    return(
        <div>
            <Paper zDepth = {2} style = {{
                width:"1320px",
               

            }}>
            <div className = "maindiv">
            {this.state.dataarr.map((value,index)=>{
            if(this.state.data !== []){
            return(
                             <div key = {index} className = "child">
                                              <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}
                                              style = {styles.card}  >
                                      <CardText>
                                      <p><strong>Title: </strong> {value.title}  </p>
                                      <p><strong> Salary:</strong>{value.salary} </p>
                                      <strong>  Description:</strong><br />
                                          {value.description}
                                        </CardText>
                                      <CardText>
                                       
                                        </CardText>
                                        {this.props.admin ?
                                            <CardActions>
                                            <RaisedButton primary = {true} label="Delete"
                                            onClick = {()=>{
                                                this.ref.child(`jobs/${this.state.arr[index]}`).remove()
                                                
                                              }}  />  
                                          </CardActions>

                                      :<CardActions>
                                        <RaisedButton primary = {true} label="Apply"
                                        onClick = {()=>{
                                       if(value.applied  ){
                                        var a = Object.values(value.applied)
                                        a.map((value,index) =>{
                                            if(value.email !==  this.props.email){
                                         firebase.database().ref().child(`jobs/${this.state.arr[index]}/applied`).push({
                                       name:this.props.name,
                                             email:this.props.email
                                         }
                                         )
                                           }
                                           else{
                                               alert("You Have Already Applied For This Job")
                                           }  
                                        })
                                          }
                                          else{
                                            firebase.database().ref().child(`jobs/${this.state.arr[index]}/applied`).push({
                                       name:this.props.name,
                                             email:this.props.email
                                            }
                                        )
                                          }
                                              }}   />  
                                      </CardActions>
                                        }
                                      </Card>
                                      </div> 
                         )
            }
            
        })}
      </div>
            </Paper>
            </div>
    )
}




}