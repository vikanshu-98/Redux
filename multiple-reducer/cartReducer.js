export const CART_ADD_ITEM ='cart/additem'
export const CART_REMOVE_ITEM = 'cart/removeItem'
export const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemQunatity'
export const CART_ITEM_DECREASE_QUANTITY='cart/decreaseItemQuantity'

export default function cartReducuer(state=[],action){ 
    switch(action.type){
        case CART_ADD_ITEM:
            return [...state,action.payload]
        case CART_REMOVE_ITEM:
            return state.filter((cartItem)=>cartItem.productId !== action.payload.productId)
        case CART_ITEM_INCREASE_QUANTITY:
            return state.map((cartItem)=>{
                if(cartItem.productId===action.payload.productId){
                    return {...cartItem,quantity:cartItem.quantity+1}
                }
                return cartItem
            })
        case CART_ITEM_DECREASE_QUANTITY:
            return state.map((cartItem)=>{
                if(cartItem.productId===action.payload.productId){
                    return {...cartItem,quantity:cartItem.quantity-1}
                }
                return cartItem
            }).filter((cartItem)=>cartItem.quantity>0)
        
        default: return state
    }
}