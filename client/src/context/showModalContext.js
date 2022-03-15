import { createContext,useReducer } from "react";

export const ShowModalContext = createContext()

const initialState={
    isLogin : true,
    show:{
    }
}

const reducer = (state,action)=>{
    const{type,payload} = action

    switch(type){
        case 'SHOW_MODAL':
            return{
                isLogin:true,
                show:payload
            }
            case 'NOT_SHOW_MODAL':
            return{
                isLogin : true,
                show:{}  
            }
        default:
            throw new Error()
    }
}

export const ShowContextProvider =({children}) =>{
    const [state,dispacth] = useReducer(reducer,initialState)

    return(
        <ShowModalContext.Provider value={[state,dispacth]} >
            {children}
        </ShowModalContext.Provider>
    )
}