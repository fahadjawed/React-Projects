import React, { Component } from 'react';
import {

    RaisedButton,
    TextField,
    Paper,
    SelectField,
    RadioButtonGroup,
    RadioButton,
    Divider

} from 'material-ui';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import * as firebase from 'firebase'
import '../../config/fbconfig';
import './post.css';

const styles = {
    card: {
        width: "300px",
        height: "350px",
        borderTopLeftRadius: "4px",
        borderBottomRightRadius: "5px",
        borderTopRightRadius: "51px"
    }
}
export default class Posted extends Component {
    ref = firebase.database().ref();
    constructor() {
        super()
        this.state = {
            expanded: false,
            change: false,
            arr: [],
            dataarr: [],
            applicant: [],
            flag:true
        }
    }
    delete(index) {
        this.ref.child(`jobs/${this.state.arr[index]}`).remove()
    }
    componentDidMount() {
        this.ref.child(`jobs/`).on("value", (snapshot) => {

            let data = snapshot.val();

            if (data) {
                var arr = []
                let finalarr = []
                var app;
                var userData = Object.values(data);
                // console.log(userData)
                for (let i in data) {

                    if (data[i].uid === firebase.auth().currentUser.uid) {
                        finalarr.push(data[i])
                        arr.push(i)
                        if (data[i].applied) {
                            app = Object.values(data[i].applied)
                        }

                    }
                }
               
                this.setState({
                    dataarr: finalarr,
                    arr: arr,
                    applicant: app
                    
                })
                        if(this.state.dataarr === []){
                            this.setState({
                                flag:false
                            })
                        }

            }
        })
    }
    render() {
        var a;
        var b;
        console.log(this.state.dataarr)

        return (
            <div className="paperdiv">
                <Paper zDepth={2} style={{
                    width: "1330px",


                }}>
                    <div className="maindiv">



                        {
                            this.state.flag ?
                                this.state.dataarr.map((value, index) => {



                                    return (

                                        <div key={index} className="child">
                                            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}
                                                style={styles.card}  >
                                            
                                                <CardText>
                                                    <p><strong>Title: </strong> {value.title}  </p>
                                                    <p><strong> Salary:</strong>{value.salary} </p>
                                                    <strong>  Description:</strong><br />
                                                    {value.description}

                                                    <h5>Applied Students </h5>
                                                    <div className="applied">
                                                        {this.state.applicant ?
                                                            this.state.applicant.map((value, index) => {
                                                                var b = Object.values(value)
                                                                return (
                                                                    <span key={index}>


                                                                        <p>Email: {value.email} </p>
                                                                        <p>Name: {value.name}</p>
                                                                    </span>
                                                                )


                                                            }) : <p>No Applicants </p>}
                                                    </div>

                                                </CardText>
                                                <CardActions>
                                                    <RaisedButton primary={true} label="Delete" onClick={this.delete.bind(this, index)} />
                                                </CardActions>
                                            </Card>
                                        </div>
                                    )
                                }


                                )
                                :
                                <h1>Post A Job First</h1>
                        }




                    </div>
                </Paper>
            </div>
        )
    }
}