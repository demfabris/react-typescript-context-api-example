import React, { createContext, useContext, useState } from 'react'

type State = {
    isLoading: boolean
}

type StateGetSet = [State, React.Dispatch<React.SetStateAction<State>>]

type SetNewState = (newValue: State) => void

type ContextHookT = [State, SetNewState]

type ContextProviderProps = {
    children: React.ReactNode
}

const initialState: State = {
    isLoading: true,
}

export const LoadingContext = createContext<StateGetSet | undefined>(undefined)

export const LoadingContextProvider = React.memo(
    ({ children }: ContextProviderProps) => {
        const StateGetSet = useState(initialState)
        return (
            <LoadingContext.Provider value={StateGetSet}>
                {children}
            </LoadingContext.Provider>
        )
    }
)

export const useLoadingContext = (): ContextHookT => {
    const [state, setState] = useContext(LoadingContext) as StateGetSet
    const setNewState = (newValue: State) => {
        setState({ ...state, ...newValue })
    }

    return [state, setNewState]
}
