import React, { Component } from 'react';
import {connect} from 'react-redux'
import Action from '../store/actions/actions'
import middleware from '../store/middleware/middleware';
import {TextField,RaisedButton,Paper,DatePicker,DropDownMenu,MenuItem}from 'material-ui'
import * as firebase from 'firebase';
import './post.css'
 

function mapStateToProps(state){
    return{
        user:state.data.getData
    }
}
function mapDispatchToProps(dispatch){
    return{
        post:(state)=>{
            dispatch(middleware.post(state))
        },
        update:(state)=>{
            dispatch(middleware.update(state))
        }
        
    }
}



class Post extends Component {
    constructor(){
        super()
        this.state = {
            name:'',
            city:'',
            number:'',
            photo:'',
            description:'',
            flag:false,
            date:'',
            price:'',
            val:null,
            value:1,
            ind:null,
            keys : []
        }

    }
    onFileLoad = (val) =>{ this.setState({photo:val.target.files[0],flag:true})
    };
    handleclick (){
        if((this.state.name&&this.state.city&&this.state.number&&this.state.description&&this.state.price)!== ''){
            if(this.props.obj){
                this.props.update(this.state)
                alert("Updated");
                this.props.close()
            }else{

                this.props.post(this.state)
                alert("Your Add Has Been Posted")
            }
        }
        else{
            alert("Fill All Fields")
        }
    console.log(this.state.val)
    }
    handledate(event, date) {
        
        var m = Number(date.getMonth())
        var d =  Number(date.getDate())
        var y = Number(date.getFullYear())
        var h =  Number (new Date().getHours())
        var mi =Number (new Date().getMinutes())
        var total = new Date(y,m,d,h,mi).getTime()
        console.log(total)
if(total>new Date().getTime()){
        this.setState({
            date: total,
            val:date
        })
    }
    else{
        alert("Duration Cant Be Less Than 24 Hours")
    }

    }
    handleChange = (event, index, value) => {this.setState({value})}
    componentWillMount(){
        if(this.props.obj){
            var obj = this.props.obj
            this.setState({
                name:obj.Name,
                city:obj.city,
                number:obj.contact,
                description:obj.description,
                flag:false,
                price:obj.price,
                value:obj.category,
                ind:this.props.ind,
                keys:this.props.keys
            })
        }
    }
    render(){

        return(
            <div className = "background">
                <Paper zDepth = {5} style= {{width:"600px" , margin :"0 auto",marginTop:"-30px",opacity:"0.9"}} >
                <div margin-left = "50px" >
                 <TextField
                 style={this.props.obj?{marginTop:"20px",marginLeft:"150px"}:null}
            value={this.state.name}
                 floatingLabelStyle={{color:"#009688"}}
                 underlineFocusStyle= {{borderColor: "#009688"}}
      floatingLabelText=" Device Name" onChange = {(val)=>{this.setState({name:val.target.value})}}
    /><br /> <TextField
    value={this.state.number}
    style={this.props.obj?{marginLeft:"150px"}:null}
    floatingLabelStyle={{color:"#009688"}}
    underlineFocusStyle= {{borderColor: "#009688"}}
    type  = "number"
    maxLength ="12"
    
      floatingLabelText="Contact No" onChange = {(val)=>{this.setState({number:val.target.value})}}
    /><br /> <TextField
    style={this.props.obj?{marginLeft:"150px"}:null}
    
    floatingLabelStyle={{color:"#009688"}}
    underlineFocusStyle= {{borderColor: "#009688"}}
    value={this.state.city}
    style={this.props.obj?{marginLeft:"150px"}:null}
    
      floatingLabelText="City Name" onChange = {(val)=>{this.setState({city:val.target.value})}}
    /><br />  
    <TextField
    value={this.state.price}
    style={this.props.obj?{marginLeft:"150px"}:null}
    
    underlineFocusStyle= {{borderColor: "#009688"}}
    floatingLabelStyle={{color:"#009688"}}
    type="number"
    hintText = "For eg : 10000"
      floatingLabelText="Initial Price" onChange = {(val)=>{this.setState({price:val.target.value})}}
    />
    <DropDownMenu animated = {true} value={this.state.value} onChange={this.handleChange} style ={this.props.postt?{width:"300px",marginLeft:"120px"}: {width:"380px",marginLeft:"-30px"} } autoWidth = {true} >
          <MenuItem value={1} primaryText="Mobile" />
          <MenuItem value={2} primaryText="LED" />
          <MenuItem value={3} primaryText="Accessories" />
        </DropDownMenu>

 {this.props.postt ?null : <DatePicker
    underlineFocusStyle= {{borderColor: "#009688"}}
    floatingLabelStyle={{color:"#009688"}}
         floatingLabelText="Ending Date Of Auction"
         autoOk={true}
    style={this.props.obj?{marginLeft:"150px"}:null}
         
      minDate ={new Date()}
         disableYearSelection={true}
         onChange= {this.handledate.bind(this)}
         value = {this.state.val}
       /> }
      <TextField
      underlineFocusStyle= {{borderColor: "#009688"}}
      value={this.state.description}
    style={this.props.obj?{marginLeft:"150px"}:null}
      
      onChange = {(val)=>{this.setState({description:val.target.value})}}
      floatingLabelText="Description"
      floatingLabelStyle= {this.props.postt?{color:"#009688"}:{marginLeft:"-70px",color:"#009688"}}
      multiLine={true}
      rows={1}
    /><br />
   
    <RaisedButton
    style={this.props.obj?{marginLeft:"150px"}:null}
    
    backgroundColor= "#009688" labelColor= "#FAFAFA"
    containerElement='label' // <-- Just add me!
    label = {this.state.flag ?"Uploaded":this.props.obj?"Update Product Picture":"Upload Product Picture"}
   
          disabled={this.state.flag}
    
    >
      <input type="file" style = {{display :'none'}} ref = "img" onChange= {this.onFileLoad.bind(this)} />
  </RaisedButton><br />
  <br />
  

    <RaisedButton label = {this.props.obj?"Update":"Post"} backgroundColor= "#009688" labelColor= "#FAFAFA"  onClick = {this.handleclick.bind(this)} 
    
    style={this.props.obj?{marginLeft:"220px"}:null}
    
    
     />
    </div>
    </Paper>
                </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post)