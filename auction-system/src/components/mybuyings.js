import React, { Component } from 'react';
import {connect} from 'react-redux'
import Action from '../store/actions/actions'
import middleware from '../store/middleware/middleware';
import {TextField,RaisedButton,Paper,Card, CardActions, CardHeader, CardMedia, CardTitle, CardText,Toggle}from 'material-ui'
import * as firebase from 'firebase';
import Cardd from './card'
import './post.css'


 function mapStateToProps(state){
    return{
user:state.data.buyings
    }
}
function mapDispatchToProps(dispatch){
return{
    buyings:()=>{
        dispatch(middleware.buyings())
    }
}
}


 class Buyings extends Component{
     constructor(){
         super()
         this.state = {
             data:[],
             flag:false
         }
     }
     componentWillMount(){
         this.props.buyings()
     }
    componentWillReceiveProps(nextProps,nextState){
let data = nextProps.user
var arr = []
var t =[]
var array =[]
console.log(nextProps.user)

    for(let i in data){
        arr.push(data[i])
        t.push(data[i].date)
        console.log(t)
    }
    t.map((val,ind)=>{
        var now = new Date().getTime();
        var tt = t[ind]
        array.push (new Date(tt).getDate()+'/'+(new Date(tt).getMonth()+1)+"/"+new Date(tt).getFullYear() )
        console.log(array)
        
    })
    console.log(data)
    if(data !== null){
    this.setState({
        data:arr,
        flag:true,
        time:array
    })
}
else{
    this.setState({
        flag:false
    })

}
    }
    render(){

        
        return(
         this.state.flag ?    
            <div className = "background" >
                <h1>Your Buyings</h1>
                {this.state.data.map((val,ind)=>{
                    return(
                <Cardd data = {val} time ={this.state.time} ind = {this.state.ind} key={ind} buy = {true} />
                    )
                })}
                </div >
                : <div className = "background"><h1>No Buyings Yet</h1></div>
        )
   
  

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Buyings)