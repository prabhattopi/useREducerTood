import React,{useReducer,useEffect, useRef} from 'react'

const initialState=[]
const reducer=(state,action)=>{
    switch(action.type){
        case "add": return [...state,{name:action.name,Done:false}]
        case "remove": return state.filter((e,i)=>(i!==action.i))
        case "toggle": return state.map((e,i)=>(i===action.i?{...e,Done:!e.Done}:e))
        default:
            return state;
    }



}

export const Todo = () => {
    const [state, dispatch] = useReducer(reducer,initialState)
    const inputREf=useRef(null)
    useEffect(() => {
    inputREf.current.focus()
    },[])
    
    const handlesubmit=(e)=>{
        e.preventDefault()
        dispatch({
            type:"add",
            name:inputREf.current.value
        })
        inputREf.current.value=""

      
    }
  return (
    <>
    <form action="" onSubmit={handlesubmit}>
        <input type="text" placeholder='add task.....' ref={inputREf} />

    </form>
    <ul>
        {state.map((e,i)=>(<li key={i}>{e.name} <button onClick={()=>{dispatch({type:"remove",i})}}>Del</button>
        <button onClick={()=>{dispatch({type:"toggle",i})}}>{e.Done?"Done":"NotDone"}</button></li>))}
    </ul>
    </>
  )
}
