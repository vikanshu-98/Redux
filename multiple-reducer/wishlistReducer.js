export const ADDWISHLIST='whishlist/add'
export const REMOVEWISHLIST='whishlist/remove'

export default function wishlistReducer(state=[],action){
    switch(action.type){
        case ADDWISHLIST:
            return [...state,action.payload]
        case REMOVEWISHLIST:
            return state.filter((wishlist)=>wishlist.productId!==action.payload.productId)
        default:
            return state
    }
}