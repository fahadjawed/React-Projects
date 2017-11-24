import Action from '../actions/actions'

const initial = {
    getData :null,
    postData:null,
    buyings:null
}

function data(state = initial,action){
    switch(action.type){
        case Action.get:
        return Object.assign({},state,{getData:action.data});
        case Action.post:
        return Object.assign({},state,{postData:action.data});
        case Action.buyings:
        return Object.assign({},state,{buyings:action.data});
      
        default:
        return state
    }


}
export default data