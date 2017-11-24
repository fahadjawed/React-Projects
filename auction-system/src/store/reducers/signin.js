import Action from '../actions/actions'
const initial = {
    signin:false,
    user:null,
    signup:false
}
function auth(state = initial,action){
    switch(action.type){
        case Action.signin:
        return Object.assign({},state,{signin:true, user:action.data,signup:true});
        case Action.signup:
        return Object.assign({},state,{signup:true,user:action.data,signin:true});
        case Action.signout:
        return Object.assign({},state,{signin:false,signup:false,user:action.data})
        default:
        return state
    }

}
export default auth