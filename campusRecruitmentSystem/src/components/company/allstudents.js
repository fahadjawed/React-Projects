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
    import './post.css'
    
    const styles = {
        card: {
            width:"300px",
            height:"350px",
            borderTopLeftRadius:"4px",
            borderBottomRightRadius:"5px",
            borderTopRightRadius:"51px",
            margin:"30px"
               
    
        }}
        
        export default class Allstudents extends Component{
            ref = firebase.database().ref();
            constructor(){
                super()
                this.state={
                    change :false,
                    dataarr : [],
                    flag:true
                }
            }
          
            
          
      
           componentDidMount(){
               this.ref.child(`users/`).on("value", (snapshot) => {
                    
                    let data = snapshot.val();
    
                    if(data){
                        var arr = []
                        let finalarr = []
                           var userData = Object.values(data);
                           // console.log(userData)
                           for(let i in data){
                            if(data[i].acctype === "student"){
                            finalarr.push(data[i])
                            arr.push(i)
                           
                           }
                        }
                        this.setState({
                            dataarr:finalarr,
                            arr: arr,
                        }) 
                        
                        if(this.state.dataarr ===[]){
                            this.setState({
                                flag:false
                            })
                        }
                    }
                })
            
            }
                
                    
                    
               
                render(){
                    var dataa;
                    
                    return(
                        <div>
                <Paper zDepth = {2} style = {{
                    width:"1340px",
                   
    
                }}>
               
               
    
            <div className = "studiv" >
            { this.state.flag ?
            this.state.dataarr.map((value,index)=>{
            return(
                             <div key = {index} className = "child">
                                              <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}
                                              style = {styles.card}  >
                                              < CardHeader >
                                             
                                              <h1>
                                                  Student
                                                  </h1>
                                      <p><strong>Name: </strong> {value.name}  </p>
                                      <p><strong> email:</strong>{value.email} </p>
                                     <p> <strong>  Education:</strong> {value.education}</p>
                                     <p> <strong>  Experience:</strong> {value.experience}</p>
                                     <p> <strong>  Skills:</strong> {value.skill}</p>

                                             </ CardHeader>  
                                      
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
      
          
           : <h1> No Students </h1>
        }
                </div>
          
                </Paper>
                </div>
                
    
        )
    }
    
    
    
    
    }