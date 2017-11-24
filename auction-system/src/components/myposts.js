import React, { Component } from 'react';
import {connect} from 'react-redux'
import Action from '../store/actions/actions'
import middleware from '../store/middleware/middleware';
import {TextField,RaisedButton,Paper,DatePicker,DropDownMenu,MenuItem,Card, CardActions, CardHeader, CardMedia,Dialog, CardTitle, CardText }from 'material-ui'
import * as firebase from 'firebase';
import Post from './post'
import Cardd from './card'
import './post.css'


function mapStateToProps(state){
    return{
        user:state.data.getData
    }
}
function mapDispatchToProps(dispatch){
    return{
        update:(state)=>{
            dispatch(middleware.update(state))
        },
        get:()=>{
            dispatch(middleware.get())
        }
    }
}

class Mypost extends Component{
    constructor(){
        super()
        this.state={
          data:[],
            open: false,
            expanded: false,
            obj:{},
            keys:[],
            indd : null
            
        }
    }
    ind(val,ind){
        console.log(ind)
        this.setState({indd:ind,obj:val,open:true})
       console.log( this.state.obj)
    }
    componentWillMount(){
        this.props.get()
      
    }
    componentWillReceiveProps(nextProps,nextState){

        let data = nextProps.user
        var arr =[]
        var t = []
        var array =[]
        var key = []
        for(let i in data){
            if(data[i].useruid === firebase.auth().currentUser.uid){
                arr.push(data[i])
                t.push(data[i].date)
                key.push(i)
            }

        }
        t.map((val,ind)=>{
            var now = new Date().getTime();
            var tt = t[ind]
            array.push (new Date(tt).getDate()+'/'+(new Date(tt).getMonth()+1)+"/"+new Date(tt).getFullYear() )
            console.log(array)
            
        })
        this.setState({
            data:arr,
        time:array,
        keys:key
        })
    }
    

    
      handleClose = () => {
        this.setState({open: false});
      };
   
    
   
    render(){
        return(
            <div className = "background">
        

{this.state.data.map((val,ind)=>{
    return(
    <div key = {ind} >
 

<Cardd data = {val} time = {this.state.time} ind = {ind} close = {this.handleClose} keys = {this.state.keys} postt  ={true}  /> 

       </div>

    )

})}
</div>

        )
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Mypost)