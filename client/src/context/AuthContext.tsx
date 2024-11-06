import React, { createContext, useReducer, useEffect } from "react"

interface UserType {
    state: any,
    dispatch: any,
    user: any
}

interface UserLocalType {
    username: string,
    token: string
}

export const AuthContext = createContext<UserType>({} as UserType)

export const authReducer = (state: any,action: any) => {
    switch(action.type){
        case 'LOGIN':
            return { user: action.payload}
        case 'LOGOUT':
            return { user: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({children}:{children: React.ReactNode}) => {
    const [state,dispatch] = useReducer(authReducer, {
        user: null
    })

    useEffect(() => {
        const userData = localStorage.getItem('user')
        if(userData){

            const user = JSON.parse(userData) as UserLocalType
                dispatch({type: 'LOGIN', payload:user})
        }
        else{
            console.log('no user')
        }
    },[])
    console.log('AuthContext state:', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}