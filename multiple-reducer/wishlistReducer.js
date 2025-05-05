export const ADDWISHLIST='whishlist/add'
export const REMOVEWISHLIST='whishlist/remove'

export default function wishlistReducer(state=[],action){
    switch(action.type){
        case ADDWISHLIST:
            // const existItem = state.find((wishlist)=>wishlist.productId===action.payload.productId)
            // if(existItem){
            //     return state.map((wishlist)=>{
            //         if(wishlist.productId===existItem.productId){
            //             return {...wishlist}
            //         }
            //         return wishlist
            //     })
            // } 
            return [...state,action.payload]
        case REMOVEWISHLIST:
            return state.filter((wishlist)=>wishlist.productId!==action.payload.productId)
        default:
            return state
    }
}


export function addToWishlist(productId){
    return { type:ADDWISHLIST, payload:{productId}
    }
}

export function removeFromWishlist(productId){
    return { type:REMOVEWISHLIST, payload:{productId}}
}