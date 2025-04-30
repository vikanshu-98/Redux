
import {createStore} from 'redux'
import {createCustomStore}   from './customRedux'
const postCount   = document.querySelector('.post-count')
let state ={
    post:0,
    name:"vc",
    age:20
}


const INCREMENT='INCREMENT'
const DECREMENT = 'DECEREMENT'
const INCREMENTBYONE = 'INCREMENTBYONE'

function reducer(initialState,action){
    if(action.type===INCREMENT){
        return {...initialState,post:initialState.post+1}
    }
    else if(action.type===DECREMENT){
        return{...initialState,post:initialState.post-1}
    }
    else if(action.type===INCREMENTBYONE){
        return{...initialState,post:initialState.post+action.payload}
    }
    return state
}



// console.log(state)
// state = reducer(state,{type:INCREMENT})
// console.log(state);

// state = reducer(state,{type:INCREMENTBYONE,payload:4})
// console.log(state);


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
const customStore = createCustomStore(reducer)
 
 
 
const unscribe = store.subscribe(()=>{
    // console.log(store.getState())
    postCount.innerText = store.getState().post
})
postCount.innerText = store.getState().post

 
customStore.subscribe(()=>{
    console.log('sdd')
})

const unsub= customStore.subscribe(()=> console.log(customStore.getState()))
customStore.dispatch({type:INCREMENT})
customStore.dispatch({type:INCREMENT}) 
unsub()

// unscribe() 
customStore.dispatch({type:INCREMENTBYONE,payload:6})

postCount.addEventListener('click',()=>{
   store.dispatch({type:INCREMENT})
})