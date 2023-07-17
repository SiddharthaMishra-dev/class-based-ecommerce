import {createStore} from 'redux'

const reducerFxn=(state={cart:[]},actions)=>{
    if(actions.type==="addItem"){
        const item=actions.payload;
        const index=state.cart.findIndex((cartItem)=>cartItem.id===item.id)
            if(index>=0){
                state.cart[index].count+=1;
            }else{
                state.cart.push({...item,count:1})
            }
    }
    return state;
}

const store =createStore(reducerFxn)
export default store;


