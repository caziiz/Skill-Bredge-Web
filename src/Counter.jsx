import { useReducer, useState } from 'react'
const initiaState = {
    count : 0,
};
function reducer(state,action){
    switch(action.Type){
        case "incriment":
        return{
            count : state.count+1

        }
        case "decrement":
             if(state.count>0)
            return{
               
                count : state.count-1
            }
            else
                return state;
            default :
            return
                state;
            
    }
}


function Counter() {
    const [state , dispatch]= useReducer(reducer,initiaState)
  return (
    <div>
        <h1>counter {state.count}</h1>
        <button onClick={()=> dispatch({Type:"decrement"})}>
            decrement
        </button>
        <button onClick={()=> dispatch({Type:"incriment"})}>
            incriment
        </button>
      
    </div>
  )
}

export default Counter
