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


export default class Students extends Component{
    constructor(){
        super()
        this.state = {
            arr:[]
        }
    }

    componentDidMount(){
        firebase.database().ref('users/').on('value',(snapshot)=>{
            let data = snapshot.val();
            var finalarr = []
            for(let i in data){
                if(data[i].type !== 'admin'){
                    finalarr.push(data[i])
                }
            }
            this.setState({arr:finalarr})
        })
    }
    render(){
        console.log(this.state.arr)
        return(
            <div className="data"  >
                <Paper zDepth = {4}  style={{
                width:"1348px"

            }}  >
                {this.state.arr.map((value,index)=>{
                    return(
                        <div  key={index} className = "child" > 

                    <Card zDepth = {5}
                                         style= {{
                                            width:"300px",
                                            height:"250px",
                                            borderTopLeftRadius:"4px",
                                            borderBottomRightRadius:"5px",
                                            borderTopRightRadius:"51px",
                                            margin:"30px"
                                         }}

                                        >
                            <h1 className = "heading">Student</h1>
                                        
                                        <CardHeader  >
                                            <div  >
                                            
                                              
                                                <p  ><strong>Email: </strong> {value.email} </p>
                                            <p><strong> Name: </strong> {value.name}</p>
                                                
                                                </div>
                                                </CardHeader>
                                            <CardText >

                                                </CardText>       
                                                </Card>

</div>

                    )



                })}
                    </Paper>


            </div>

        )
    }



}