import {combineReducers, createStore} from 'redux'
import productReducer from './productReducer'
import cartReducuer, { CART_ADD_ITEM, CART_ITEM_DECREASE_QUANTITY, CART_ITEM_INCREASE_QUANTITY, CART_REMOVE_ITEM } from './cartReducer'
import wishlistReducer, { ADDWISHLIST, REMOVEWISHLIST } from './wishlistReducer'

const reducer = combineReducers({
    products:productReducer,
    cartItems:cartReducuer,
    wishlist:wishlistReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

// store.dispatch({type:''})
store.dispatch({type:CART_ADD_ITEM,payload:{quantity:1,productId:1}})
store.dispatch({type:CART_ADD_ITEM,payload:{quantity:1,productId:2}})
store.dispatch({type:CART_REMOVE_ITEM,payload:{productId:1}})
store.dispatch({type:CART_ITEM_INCREASE_QUANTITY,payload:{productId:1}})
store.dispatch({type:CART_ITEM_INCREASE_QUANTITY,payload:{productId:1}}) 
store.dispatch({type:CART_ITEM_INCREASE_QUANTITY,payload:{productId:1}}) 
// store.dispatch({type:CART_ADD_ITEM,payload:{quantity:1,productId:4}})
store.dispatch({type:CART_ITEM_DECREASE_QUANTITY,payload:{productId:2}})
store.dispatch({type:CART_ITEM_DECREASE_QUANTITY,payload:{productId:2}})
store.dispatch({type:CART_ITEM_DECREASE_QUANTITY,payload:{productId:2}})
store.dispatch({type:ADDWISHLIST,payload:{productId:2}})
store.dispatch({type:ADDWISHLIST,payload:{productId:4}})
store.dispatch({type:REMOVEWISHLIST,payload:{productId:2}})
store.dispatch({type:CART_ITEM_INCREASE_QUANTITY,payload:{productId:2}})

console.log(store.getState());
