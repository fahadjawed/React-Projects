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
export default class Allfeedback extends Component {
    constructor() {
        super()
        this.state = {
            userdata: "",
            key:"",
            datas:""
        }
    }
    componentDidMount() {
        firebase.database().ref('feedback/').on('value', snap => {



            var arr = []
            var key =[]
            let data = snap.val()
            for (let i in data) {
                arr.push(data[i])
                key.push(i)
                console.log(arr)
            }
            this.setState({
                userdata: arr,
                keys:key,
                datas:data
            })
            console.log(this.state.userdata)

        })
    }
    handlechange(val){
        this.setState({
            reply:val.target.value
        })

    }
    handleclick(index){
        firebase.database().ref(`feedback/${this.state.keys[index]}`).update({
            reply:this.state.reply
        })
    }
    render() {


        return (
            <Paper zDepth={3} style={{
                height: "624px",

            }} >
              
                    <div className="data" >

                        {
                            this.state.userdata ?
                                this.state.userdata.map((value, index) => (
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
                                            
                                              
                                                <p  ><strong>Email: </strong> {value.email} </p>
                                                </div>
                                                </CardHeader>
                                            <CardText >
                                            <p><strong> Feedback: </strong></p><p width="30px" > {value.feedback}</p>

                                                </CardText>                                                


                                        
                                            <CardActions>
                                                <TextField  onChange={this.handlechange.bind(this)} label="reply" name="reply" />
                                                <RaisedButton label="reply" onClick={this.handleclick.bind(this,index)}/>
                                            </CardActions>
                                        </Card>
                                    </div>
                                )) : null}


                    </div>


            </Paper>
        )
    }





}