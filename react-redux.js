import { createContext,useContext, useEffect,useState } from "react";

const StoreContext =  createContext()

export function Provider({store,children}){
    
    const [state,setState] = useState(store.getState())
    useEffect(()=>{
        const unsubscribe = store.subscribe(()=>{
            setState(store.getState())
        })
        return () => unsubscribe()
    },[])

    return (
        <StoreContext.Provider value={{state,store}}>
            {children}
        </StoreContext.Provider>
    )
}


export function useDispatch(){
    return useContext(StoreContext).store.dispatch

}

export function useSelector(selector){
    // const store =  
    return selector(useContext(StoreContext).store.getState())
}
