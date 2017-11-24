import CounterAction from '../actions/counter';
const initial = {
    state:0
}

function decrement(value = initial,action){
    switch(action.type){
        case CounterAction.DECREMENT:
        return Object.assign({},value,{state:value.state-1})
        default:
        return value
    }
}

export default decrement