import {createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }
  

const reducerFxn=(state={cart:[]},actions)=>{
    // if(actions.type==="addItem"){
    //     const item=actions.payload;
    //     const index=state.cart.findIndex((cartItem)=>cartItem.id===item.id)
    //         if(index>=0){
    //             state.cart[index].count+=1;
    //         }else{
    //             state.cart.push({...item,count:1})
    //         }
    //     return state
    // }
    // return state;
    if(actions.type==="addItem"){
        const item=actions.payload;
        // create a new copy of the cart array
        const newCart = [...state.cart];
        const index=newCart.findIndex((cartItem)=>cartItem.id===item.id)
            if(index>=0){
                // create a new copy of the cart item object
                const newItem = {...newCart[index], count: newCart[index].count + 1};
                // replace the old item with the new item
                newCart[index] = newItem;
            }else{
                // create a new copy of the item object with count property
                const newItem = {...item, count: 1};
                // add the new item to the new cart array
                newCart.push(newItem);
            }
        // return a new copy of the state with the updated cart array
        return {...state, cart: newCart};
    }
    return state;
}

const persistedReducer = persistReducer(persistConfig, reducerFxn)

const store =createStore(persistedReducer)
let persistor = persistStore(store)
export  {store,persistor};


