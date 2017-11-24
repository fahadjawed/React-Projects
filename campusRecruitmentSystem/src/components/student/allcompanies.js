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
    import '../company/post.css'
    
    const styles = {
        card: {
            width:"300px",
            height:"350px",
            borderTopLeftRadius:"4px",
            borderBottomRightRadius:"5px",
            borderTopRightRadius:"51px",
            margin:"30px"
    
        }}
        
        export default class Allcompanies extends Component{
            ref = firebase.database().ref();
            constructor(){
                super()
                this.state={
                    change :false,
                    dataarr:[],
                    pushkey : [],
                    flag:false
                }
            }
            componentDidMount(){
                this.ref.child(`users/`).on("value", (snapshot) => {
                     
                     let data = snapshot.val();
                     // console.log(data)
     
                     if(data){
                         var arr = []
                         let finalarr = []
                            var userData = Object.values(data);
                            // console.log(userData)
                            for(let i in data){
                             if(data[i].acctype === "company"){
                             finalarr.push(data[i])
                             arr.push(i)
                            //  console.log(finalarr[0])
                            }
                         }
                         this.setState({
                             dataarr:finalarr,
                             arr: arr,
                         })
                         if(this.state.dataarr !== []){
                             this.setState({
                                 flag:true
                             })
                         }
                         

                     }
                 })

             this.ref.child("jobs/").on("value", (snapshot) =>{
                 var data = snapshot.val()
                 if(data){
                 var keys = Object.values(data)
                for(let i in data){
                 this.state.pushkey.push(i)
                   }
                // console.log(keys[0].uid)
                }
             })
            
             }
                 
            
          
      
            
                render(){
                    
                    
                    return(
                        <div>
                <Paper zDepth = {2} style = {{
                    width:"1300px",
                   
    
                }}>
               
               
    
            <div className= "studiv" >
            {this.state.flag ?
            this.state.dataarr.map((value,index)=>{
            return(
                             <div key = {index} className = "child">
                                              <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}
                                              style = {styles.card}  >
                                              < CardHeader >
                                             
                                              <h1>
                                                Company
                                                  </h1>
                                             </ CardHeader>  
                                      <CardText>
                                      <p><strong>Name: </strong> {value.name}  </p>
                                      <p><strong> email:</strong>{value.email} </p>
                                    
                                        </CardText>
                                        {this.props.admin ?
                                            <CardActions>
                                            <RaisedButton primary = {true} label="Delete"
                                            onClick = {()=>{
                                                this.ref.child(`users/${this.state.arr[index]}`).remove()
                                            
                                              }}  />  
                                          </CardActions>
                                        : <CardText>
                                       
                                        </CardText> }
                                      
                                      
                                      </Card>
                                      </div> 
                         )
            }
          
        )
            : <div><h1> No Companies  </h1></div>
            }
                </div>
          
                </Paper>
                </div>
                
    
        )
    }
    
    
    
    
    }