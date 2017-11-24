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
    CardText,
    CardTitle
} from 'material-ui';
import "./css/signin.css"
import * as firebase from 'firebase';
import '../config/fbconfig';

export default class Myfeedback extends Component{
    constructor(){
        super()
        this.state={
            arr:''
        }
    }

    componentWillMount(){
        firebase.database().ref("feedback/").on("value",(snapshot)=>{
            let data = snapshot.val()
            var arrr = []
            for(let i in data){
                if(data[i].email=== firebase.auth().currentUser.email){
                    arrr.push(data[i])
                }
            }
         this.setState({
             arr:arrr
         })
            
        })
    }


    render() {
        
        
                return (
                    <Paper zDepth={3} style={{
                        height: "624px",
        
                    }} >
                      
                            <div className="data" >
        
                                {
                                    this.state.arr ?
                                        this.state.arr.map((value, index) => (
                                            <div  key={index} className = "child" > 
        
        
                                                <Card
                                                 style= {{
                                                    width:"300px",
                                                    height:"350px",
                                                    borderTopLeftRadius:"4px",
                                                    borderBottomRightRadius:"5px",
                                                    borderTopRightRadius:"51px",
                                                    margin:"30px"
                                                 }}
        
                                                >
                                                <CardHeader  >
                                                    <div  >
                                                    
                                                      
                                                        <p  ><strong>Your Email: </strong> {value.email} </p>
                                                        </div>
                                                        </CardHeader>
                                                    <CardText >
                                                    <p><strong>Your Feedback: </strong></p><p width="30px" > {value.feedback}</p>
                                                    <p><strong>Reply By Admin: </strong></p><p>{value.reply}</p>
                                                        </CardText>                                                
        
        
                                                
                                                    
                                                </Card>
                                            </div>
                                        )) : null}
        
        
                            </div>
        
        
                    </Paper>
                )
            }
        
}