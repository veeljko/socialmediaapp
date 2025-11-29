import {createContext, useReducer, useEffect, useState} from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { token: action.payload }
        case 'LOGOUT':
            return { token: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        token: null
    })

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            dispatch({ type: 'LOGIN', payload: token })
        }

        setLoading(false);
    }, [])

    //console.log(state.token)

    return (
        <AuthContext.Provider value={{ ...state, dispatch, loading }}>
            { children }
        </AuthContext.Provider>
    )

}