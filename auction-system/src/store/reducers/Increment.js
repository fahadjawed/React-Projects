import CounterAction from '../actions/counter';

const initial = {
    state: 0
}
function increment(value = initial,action){
    switch(action.type){
        case CounterAction.INCREMENT:
        return Object.assign({},value,{state:value.state+1});
        case CounterAction.INCREMENT_WITH_VALUE:
        return Object.assign({},value,{state:value.state+action.val});
        default: return value

    }
}
export default increment