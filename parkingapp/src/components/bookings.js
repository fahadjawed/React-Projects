import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,

} from 'react-router-dom';
import {
    RaisedButton,
    Paper,
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui';
import * as firebase from 'firebase';
import '../config/fbconfig';


export default class Bookings extends Component {
    constructor(){
        super()
        this.state={
            userdata:[],
            arr:[],

        }
    }
    componentDidMount(){
firebase.database().ref().child("areas/").on("value",(snapshot)=>{
    var final=[]
    var arr=[]
    let data = snapshot.val();
    for(let i in data){
        if(this.props.admin){
            final.push(data[i])
            arr.push(i)
        }
      else{

        if(data[i].bookedby === firebase.auth().currentUser.uid){
            final.push(data[i])
            arr.push(i)
      }
    }
}
    this.setState({
        userdata:final,
        arr:arr
    })


})
    }
    handledelete(index) {
        firebase.database().ref().child(`areas/${this.state.arr[index]}`).remove()
       
    }
render(){

    return(
        <Paper zDepth = {3} >
            <Table 
            selectable = {false}
            >
                <TableHeader displaySelectAll = {false} adjustForCheckbox = {false} >
                    <TableRow>
                <TableHeaderColumn>
                    {this.props.admin ? "All Bookings" :"Your Bookings" }
                       
                    </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn > Area </TableHeaderColumn>
                            <TableHeaderColumn > Starting Time </TableHeaderColumn>
                            <TableHeaderColumn > Ending Time </TableHeaderColumn>
                            <TableHeaderColumn > Date </TableHeaderColumn>
                            
                            </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox = {false}>
                       
                            {this.state.userdata.map((value,index)=>{
                                return(
                                    <TableRow key={index} >
                                        <TableRowColumn> {value.area} </TableRowColumn>
                                        <TableRowColumn> {new Date(value.start).getHours() + ":" + new Date(value.start).getMinutes()  } </TableRowColumn>
                                        <TableRowColumn> {new Date(value.till).getHours() + ":" + new Date(value.till).getMinutes()  } </TableRowColumn>
                                        <TableRowColumn> {new Date(value.start).getDate() + "/" + new Date(value.start).getMonth() + "/" + new Date(value.start).getFullYear()  } </TableRowColumn>
                                        <TableRowColumn> <RaisedButton primary = {true } label = "Cancel" onClick = {this.handledelete.bind(this,index)}  /> </TableRowColumn>
                                        
                                        </TableRow>
                                )
                            })}

                                </TableBody>
                </Table>

            </Paper>
    )
}
}