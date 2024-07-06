import { useReducer } from "react"
import { GlobalStateContext } from "./globalStateContext"
import { reducer } from "./reducer"
import { initialState } from "./constant"

export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <GlobalStateContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStateContext.Provider>
    )

}