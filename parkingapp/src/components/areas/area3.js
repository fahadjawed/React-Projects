import React, { Component } from 'react'

import {
    RaisedButton,
    Paper,
    TextField,
    FlatButton,
    Dialog,
    DatePicker
} from 'material-ui';
import '../css/main.css'

export default class Area3 extends Component{
    constructor(){
        super()
        this.state  ={
            open: false,
        }
    }
    handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };
    render(){
        const actions = [
            <FlatButton
              label="Ok"
              primary={true}
              keyboardFocused={true}
              onClick={this.handleClose}
            />,
          ];
        return(<div>

            <Dialog
            title="Dialog With Date Picker"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            Open a Date Picker dialog from within a dialog.
            <DatePicker hintText="Date Picker" />
          </Dialog>
            <div>
                  <Paper zDepth={2} style={{
                  
                    maxWidth:"1366px",
                  
                    position:"absolute"
                }} >
               
               
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>         <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                <div className = "spot"  >  </div>
                
                <div className = "maindiv">
                

                <div className = "lines"></div> 
                 <div className = "lines"></div>
                <div className = "lines"></div>
                <div className = "lines"></div>
                <div className = "lines"></div>
                <div className = "lines"></div>
                <div className = "lines"></div>
                <div className = "lines"></div>
                <div className = "lines"></div>
                <div className = "lines"></div>
                <div className = "lines"></div>
                <div className = "lines"></div>
                


                </div>
                <br />
                <br />
                <br />
                <br />
                <div className = "spot"  > <FlatButton onClick={this.handleOpen} label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} hoverColor = "blue" /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>         <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                <div className = "spot"  > <FlatButton label = "slot" style={{minWidth:"10px",maxWidth:"51px",minHeight:"50px"}} labelStyle = {{marginLeft:"-7px"}} /> </div>
                
                </Paper>
            </div>
            </div>
        )
    }
}