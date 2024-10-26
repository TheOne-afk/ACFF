import React, { createContext, useReducer } from "react"

interface UserType {
    state: any,
    dispatch: any
}

export const AuthContext = createContext<UserType>({} as UserType)

export const authReducer = (state: any,action: any) => {
    switch(action.type){
        case 'SIGNUP':
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
    console.log('AuthContext state:', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}