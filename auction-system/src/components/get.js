import React, { Component } from 'react';
import {connect} from 'react-redux'
import Action from '../store/actions/actions'
import middleware from '../store/middleware/middleware';
import {TextField,RaisedButton,Paper,Card, CardActions, CardHeader, CardMedia,Dialog, CardTitle, CardText,DropDownMenu,MenuItem}from 'material-ui'
import * as firebase from 'firebase'
import './post.css'
import Post from './post'
import Cardd from './card'
function mapStateToProps(state){
    return{
        user:state.data.getData
    }
}
function mapDispatchToProps(dispatch){
    return{
        get:()=>{
            dispatch(middleware.get())
        }
        
    }
}
    class Get extends Component{
        constructor(){
            super()
            this.state = {
                data:[],
                photo:[],
                expanded: false,
                keys :[],
                time:[],
                usertime:[],
                bid:'',
                cat:false,
                value: 0,
                open:false,
                obj:{}
            }
        }
        handleExpandChange = (expanded) => {
            this.setState({expanded: expanded});
          };
        
        
        
          handleExpand = () => {
            this.setState({expanded: true});
          };
        
          handleReduce = () => {
            this.setState({expanded: false});
          };
          handleOpen = () => {
            this.setState({open: true});
          };
        
          handleClose = () => {
            this.setState({open: false});
          };
        componentWillMount(){
            this.props.get()
           
        }
        componentWillReceiveProps(nextProps,nextState){
            var data = nextProps.user
            var arr = []
            var photos = []
            var array =[]
            var t = []
            var key = []
          
            for(let i in data ){
                
              if(data[i].date<new Date().getTime()){
                  firebase.database().ref(`buyings/${data[i].uid}`).push({
                      Name:data[i].Name,
                      price:data[i].price,
                      description:data[i].description,
                      photo:data[i].photo,
                      date:data[i].date,
                      contact:data[i].contact,
                      city:data[i].city,
                      email:data[i].email,
                      username:data[i].username
                      
                  })
                  firebase.database().ref(`users/${i}`).remove()
              }else{
                  if(data[i].useruid === firebase.auth().currentUser.uid){


                  }
                  else{
                arr.push(data[i])
                t.push(data[i].date)
                key.push(i)
                photos.push(data[i].photo)
                  }

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
                photo:photos,
                usertime:t,
                time:array,
                keys:key,
                all :arr
            })
           
        }
     bid(ind,oldbid){
         var ob = Number(oldbid);
         var newbid = Number( this.state.price)
         if(newbid>ob){
         firebase.database().ref(`users/${this.state.keys[ind]}`).update({
             price:newbid,
             uid:firebase.auth().currentUser.uid
         })
        }
        else{
            alert("Bid more")
        }
     }
     ind(ind){
         console.log(ind)
     }
     handleChange = (event, index, value) => {
     let data=this.state.all;
     var arr = []
     var t =[]
     var array =[];
     var key = []
     if(value !== 0){
     for(let i in data){
         if(data[i].category===value){
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
     this.setState({data:arr,time:array,value:value,keys:key })
    }
        else{
            this.setState({data:this.state.all,value:value})
        }
    };
        render(){ 
            var time;
            var array=[] 

            
            return(
<div>

                <div className = "parent background">
                <DropDownMenu value={this.state.value} onChange={this.handleChange} style ={{width:"700px",backgroundColor:"white" , marginRight:"4%",opacity:"0.9"}} autoWidth = {false}>
                <MenuItem value={0} primaryText="All" />
                
                <MenuItem value={1} primaryText="Mobiles" />
                <MenuItem value={2} primaryText="LEDs" />
                <MenuItem value={3} primaryText="Accessories" />
        </DropDownMenu>

       {this.state.data.map((val,ind)=>{
           return(
<div key = {ind} height = "50px">

<Cardd data = {val} time = {this.state.time} ind = {ind} keys = {this.state.keys} get = {true}  />
                        </div>)
       })}
     
                    </div>
                    
        
                    </div>
            )
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Get)