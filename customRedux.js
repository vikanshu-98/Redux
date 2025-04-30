export function createCustomStore(reducer){
    let state
    const listners =[]
    const store={
        getState(){ 
            return state
        },
        dispatch(action){
            state  = reducer(state,action)
            listners.forEach(listner=>listner())
        },
        subscribe(listner){
            listners.push(listner) 
          return function(){
            listners.splice(listners.findIndex(d=>d===listner),1)
          }  
        }

    }
    store.dispatch({type:'@@INIT'})
    return store
}